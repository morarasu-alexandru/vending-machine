import { UserState } from '../interfaces&types';
import { UserActions, UserActionsTypes } from '../actions/userActions';

const initialState: UserState = {
  products: {},
  balance: {
    coins: {
      count: 4
    },
    paperMoney: [1, 10, 5, 5]
  }
};

const userReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionsTypes.withdrawPaperMoneyByIdx: {
      const { idx } = action.payload;
      let newPaperMoney = [...state.balance.paperMoney];
      newPaperMoney.splice(idx, 1);

      return {
        ...state,
        balance: {
          ...state.balance,
          paperMoney: newPaperMoney
        }
      };
    }
    case UserActionsTypes.widthdrawCoin: {
      const newCoinCount = state.balance.coins.count - 1;

      return {
        ...state,
        balance: {
          ...state.balance,
          coins: {
            ...state.balance.coins,
            count: newCoinCount
          }
        }
      };
    }
    default:
      return state;
  }
};

export default userReducer;
