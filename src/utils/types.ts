export type DataPoint = {
  date: string;
  amount: number;
  ref: string;
};

export type TotalPoint = {
  date: string;
  transactions: Number;
  amount: Number;
};

export type ReferencePoint = {
  name: string;
  count: Number;
  transactions: Array<DataPoint>;
  amount: Number;
};

export type RecurringPoint = {
  name: string;
  total: Number;
  transactions: Array<DataPoint>;
};

export type Buffer = {
  [key: string]: [DataPoint];
};
