export interface UserState {
  products: Products;
  balance: Balance;
}

export interface VendingMachineState {
  products: Products;
  balance: Balance;
  inputBalance: Balance;
  outputBalance: Balance;
  commandPanelId: string;
}

interface Products {
  [productId: string]: Product;
}

interface Balance {
  paperMoney: PaperMoney[];
  coins: {
    count: number;
  };
}

export type PaperMoney = 1 | 5 | 10;

export interface Product {
  count: number;
  name: string;
  price: number;
}
