export interface AuthUser {
  id: string;
  userId: string;
  password: string;
  token: string;
}
export interface User {
  id: string;
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
