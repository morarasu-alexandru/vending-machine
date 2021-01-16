import { UserState } from '../interfaces&types';

const initialState: UserState = {
  products: {},
  balance: {
    coins: {
      count: 4
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
