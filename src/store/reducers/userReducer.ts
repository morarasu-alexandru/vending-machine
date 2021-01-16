interface UserState {
  products: Products;
  balance: Balance;
}

interface Products {
  [productId: string]: Product;
}

interface Balance {
  paperMoney: PaperMoney[];
  coins: {
    count: number;
    value: 0.5;
  };
}

export type PaperMoney = 1 | 5 | 10;

export interface Product {
  count: number;
  name: string;
  price: number;
}

const initialState: UserState = {
  products: {},
  balance: {
    coins: {
      count: 4,
      value: 0.5
    },
    paperMoney: [1, 10, 5, 5]
  }
};

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const userReducer = (state = initialState, action): UserState => {
  return state;
};

export default userReducer;
