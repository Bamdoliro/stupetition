export interface CustomError {
  response?: {
    data: any;
    status: number;
    headers: string;
  };

  data?: {
    message: string;
    status: number;
  };
}
