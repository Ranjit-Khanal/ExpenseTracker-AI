export interface Record {
  date: string | number | Date;
  id: string;
  text: string;
  amount: number;
  category: string;
  userId: string;
  createdAt: Date;
}

export interface RecordData {
  text: string;
  amount: number;
  category: string;
  date: string; // Added date field
}

export interface RecordResult {
  data?: RecordData;
  error?: string;
}