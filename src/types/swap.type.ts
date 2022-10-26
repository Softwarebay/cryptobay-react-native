export type Swap = {
  id?: number;
  date: string;
  operation: 'Received' | 'Sent';
  status: 'Confirmed' | 'Cancelled';
  value: number;
  valueInDolar: number;
  from: string;
  to: string;
};
