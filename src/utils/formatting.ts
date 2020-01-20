import { DataPoint, TotalPoint, ReferencePoint } from "./types";

//  Get array of dates from array of datapoints
export function isolateDate(data: Array<DataPoint>): Array<String> {
  return data.map(item => item.date);
}

//  Get array of amounts from array of datapoints
export function isolateAmount(data: Array<DataPoint>): Array<Number> {
  return data.map(item => item.amount);
}

export function isolateReference(data: Array<ReferencePoint>): Array<String> {
  return data.map(item => item.name);
}

export function isolateCount(data: Array<ReferencePoint>): Array<Number> {
  return data.map(item => item.count);
}

//  Get array of transaction amounts from array of totalPoints
export function isolateTransactionCounts(
  data: Array<TotalPoint>
): Array<Number> {
  return data.map(item => item.transactions);
}

//  Map data to array of colors

export function mapToColor(
  color: String,
  data: Array<DataPoint>
): Array<String> {
  return data.map(_ => color);
}

export function formatDate(date: String): String {
  //  Expected format is yyyy/mm/dd
  let split: Array<String> = [];
  if (date.includes("-")) {
    split = date.split("-");
  }
  if (date.includes("/")) {
    split = date.split("/");
  }
  if (split.length !== 0) {
    //yyyy/mm/dd
    if (split[0].length === 4) {
      date = `${split[0]}/${split[1]}/${split[2]}`;
    }
    //dd/mm/yyyy
    if (split[2].length === 4) {
      date = `${split[2]}/${split[1]}/${split[0]}`;
    }
    //mm/dd/yy
    if (split[0].length !== 4 && split[2].length !== 4) {
      date = `20${split[2]}/${split[0]}/${split[1]}`;
    }
  }
  return date;
}

//  Check if date is valid yyyy/mm/dd
export function isValidDate(date: String): Boolean {
  return date.includes("/");
}

export function getMonthNumber(date: String): number {
  return parseInt(date.split("/")[1]);
}

export function numberWithSpaces(x: number): String {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
