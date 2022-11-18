export interface IMail {
  subject: string;
  from: string;
  to: string;
  cc?: string[];
  text: string;
}
