import {
  DataPoint,
  TotalPoint,
  ReferencePoint,
  RecurringPoint,
  Buffer
} from "./types";

import { intersect, occurances } from "./helpers";

import { getMonthNumber } from "./formatting";

function getCommonWords(str1: String, str2: String): Array<String> {
  //  Split and remove words that container numbers
  let split1 = str1.split(" ").filter((word: string) => !/\d/.test(word));
  let split2 = str2.split(" ").filter((word: string) => !/\d/.test(word));
  let commonWords: Array<String> = [];

  if (split1.length > split2.length) {
    split1.forEach((word: string) => {
      if (split2.includes(word)) {
        commonWords.push(word);
      }
    });
  } else {
    split2.forEach((word: string) => {
      if (split1.includes(word)) {
        commonWords.push(word);
      }
    });
  }
  //  Remove spaces
  let sanitized = commonWords.filter(word => word !== "");
  return sanitized;
}

export function addAmounts(data: [DataPoint]): Array<TotalPoint> {
  let buffer: Buffer = {};
  let sorted: Array<TotalPoint> = [];
  //    Buffer via dates
  data.forEach((item: DataPoint) => {
    const { date } = item;
    if (buffer[date]) {
      buffer[date].push(item);
    } else {
      buffer[date] = [item];
    }
  });
  //    Add amounts and count transactions
  Object.keys(buffer).forEach(key => {
    let total: number = 0;
    buffer[key].forEach(item => {
      const { amount } = item;
      total = total + amount;
    });
    sorted.push({
      date: key,
      transactions: buffer[key].length,
      amount: total
    });
  });

  return sorted;
}

//  Get months numbers from collection of datapoints
export function getMonths(data: Array<DataPoint>): Array<Number> {
  let months: Array<any> = [];
  data.forEach(item => {
    let month = getMonthNumber(item.date);
    months.includes(month) || months.push(month);
  });
  return months.reverse();
}

//  FIXME: Possibly rather go for using month names as object keys
//  Return sorted datapoints by month
export function sortByMonth(
  data: Array<DataPoint>
): { month: Array<DataPoint> } {
  let sorted: any = {};
  data.forEach(item => {
    let month = getMonthNumber(item.date);
    if (sorted[month]) {
      sorted[month].push(item);
    } else {
      sorted[month] = [item];
    }
  });
  return sorted;
}

//  Determines reference counts by comparing similarity of reference names
export function getRecurringTransactions(
  data: Array<DataPoint>
): Array<ReferencePoint> {
  let references = data.reduce((acc: any, item) => {
    const { ref, amount, date } = item;
    let sanitized = getCommonWords(ref, ref).join(" ");
    if (acc[sanitized]) {
      acc[sanitized] = {
        transactions: [
          ...acc[sanitized].transactions,
          {
            ref,
            date,
            amount
          }
        ],
        amount: acc[sanitized].amount + amount,
        count: acc[sanitized].count + 1
      };
    } else {
      acc[sanitized] = {
        transactions: [
          {
            ref,
            date,
            amount
          }
        ],
        amount,
        count: 1
      };
    }
    return acc;
  }, {});

  let formatted = Object.keys(references).map(key => {
    return {
      name: key,
      transactions: references[key].transactions,
      amount: references[key].amount,
      count: references[key].count
    };
  });

  return formatted;
}

function getReferencesByMonth(
  data: Array<DataPoint>
): { month: Array<ReferencePoint> } {
  let sorted: any = sortByMonth(data);
  Object.keys(sorted).forEach(key => {
    sorted[key] = getRecurringTransactions(sorted[key]);
  });
  return sorted;
}

//  FIXME: Add amounts if reference occurs more than once in same month
export function getDebitOrders(data: Array<DataPoint>): Array<RecurringPoint> {
  //  Format per month {[key: month]: Array<RecurringPoint>}
  let sorted: { [key: number]: Array<ReferencePoint> } = getReferencesByMonth(
    data
  );
  //  Format anonomous array and filter for only 1 transaction {[key: index]: Array<RecurringPoint>}
  let test: Array<Array<ReferencePoint>> = Object.values(sorted).map(
    (month: any) => {
      return month.filter((transaction: ReferencePoint) => {
        return transaction.transactions.length === 1;
      });
    }
  );
  //  array[string] with reference name duplicates as often as they come up across months
  let test2: Array<string> = test.reduce(
    (acc: Array<string>, item: Array<ReferencePoint>) => {
      return [
        ...acc,
        ...item.map((transaction: ReferencePoint) => {
          return transaction.name;
        })
      ];
    },
    []
  );
  //  array[string] with references removed that occur less than the total amount of monts - 1
  //  ( to account for incomplete statements)
  let test3: Array<string> = test
    .flat()
    .filter(item => {
      return occurances(test2, item.name) >= Object.values(sorted).length - 1;
    })
    .map(_ => _.name);

  let formatted: {
    [key: string]: { amount: number; transactions: Array<DataPoint> };
  } = Object.keys(sorted).reduce((result: any, key: any) => {
    sorted[key].forEach((monthTransaction: ReferencePoint) => {
      if (test3.includes(monthTransaction.name)) {
        if (result[monthTransaction.name]) {
          result[monthTransaction.name] = {
            amount:
              result[monthTransaction.name].amount + monthTransaction.amount,
            transactions: [
              ...result[monthTransaction.name].transactions,
              ...monthTransaction.transactions
            ]
          };
        } else {
          result[monthTransaction.name] = {
            amount: monthTransaction.amount,
            transactions: monthTransaction.transactions
          };
        }
      }
    });
    return result;
  }, {});
  let finalFormat = Object.keys(formatted).map(key => {
    return {
      name: key,
      total: formatted[key].amount,
      transactions: formatted[key].transactions
    };
  });
  return finalFormat;
}

export function getTotalIncome(data: Array<DataPoint>): Number {
  return data.reduce((acc, item) => {
    if (item.amount > 0) {
      acc += item.amount;
    }
    return acc;
  }, 0);
}

export function getTotalIncomeTransactionCount(data: Array<DataPoint>): Number {
  return data.reduce((acc, item) => {
    if (item.amount > 0) {
      acc += 1;
    }
    return acc;
  }, 0);
}

export function getTotalExpenses(data: Array<DataPoint>): Number {
  return data.reduce((acc, item) => {
    if (item.amount < 0) {
      acc += item.amount;
    }
    return acc;
  }, 0);
}

export function getTotalExpenseTransactionCount(
  data: Array<DataPoint>
): Number {
  return data.reduce((acc, item) => {
    if (item.amount < 0) {
      acc += 1;
    }
    return acc;
  }, 0);
}
