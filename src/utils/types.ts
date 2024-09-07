export interface AuthUser {
  userId: string;
  password: string;
  token: string;
}
export interface User {
  name: string;
  email: string;
}
export interface Product {
  type: string;
  name: string;
  flavour: string;
  filling: string;
  complements: string;
  price: number;
}
