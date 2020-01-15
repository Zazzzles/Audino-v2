export interface DataPoint {
  date: string;
  amount: number;
  ref: string;
}

export interface TotalPoint {
  date: string;
  transactions: Number;
  amount: Number;
}

export interface ReferencePoint {
  name: string;
  count: Number;
  transactions: Array<DataPoint>;
  amount: Number;
}

export interface RecurringPoint {
  name: string;
  total: Number;
  transactions: Array<DataPoint>;
}

export interface Buffer {
  [key: string]: [DataPoint];
}
