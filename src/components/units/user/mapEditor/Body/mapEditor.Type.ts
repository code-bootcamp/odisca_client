export interface IStyle {
  borderLeft: string;
  borderRight: string;
  borderBottom: string;
  borderTop: string;
  backgroundColor: string;
  cursor: string;
}

type Matrix = any[][];

export interface ISeat {
  seats: Matrix | null;
  status: number;
  counts: number;
}
