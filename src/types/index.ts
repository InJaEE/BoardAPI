export interface User {
  id: number;
  email: string;
  name: string;
}

export interface ResMsg {
  data?: any;
  status: number;
  message: string;
}
