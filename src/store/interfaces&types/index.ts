export interface UserState {
  products: Products;
  balance: Balance;
}

export interface VendingMachineState {
  products: Products;
  balance: Balance;
  inputBalanceValue: number;
  outputBalanceValue: number;
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
