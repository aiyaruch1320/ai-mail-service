export interface IMailRequest {
  title: string;
  from: string;
  to: string;
  cc?: string[];
  content: string;
}
