export interface Transfer {
  id?: number;
  originAccount: string;
  destinationAccount: string;
  amount: number;
  fee?: number;
  transferDate: string;
  schedulingDate: string;
}
