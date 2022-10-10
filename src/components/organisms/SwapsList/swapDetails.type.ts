export type SwapDetails = {
  shortName: string;
  operation: string;
  status: 'Confirmed' | 'Cancelled';
  date: string;
  value: number;
  from: string;
  to: string;
};
