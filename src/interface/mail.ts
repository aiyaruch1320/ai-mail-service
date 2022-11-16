export interface IMail {
  title: string;
  from: string;
  to: string;
  cc?: string[];
  content: string;
}
