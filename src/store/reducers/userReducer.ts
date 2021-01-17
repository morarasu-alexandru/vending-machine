import { UserState } from '../interfaces&types';
import { UserActions, UserActionsTypes } from '../actions/userActions';

const initialState: UserState = {
  products: {},
  balance: {
    coins: {
      count: 4
    },
    paperMoney: [1, 10, 1, 5, 5]
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
    case UserActionsTypes.withdrawCoin: {
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

    case UserActionsTypes.depositProduct: {
      const { product, productCode } = action.payload;

      const newProducts = { ...state.products };

      if (state.products[productCode]) {
        newProducts[productCode].count =
          state.products[productCode].count + product.count;
      } else {
        newProducts[productCode] = product;
      }

      return {
        ...state,
        products: newProducts
      };
    }

    case UserActionsTypes.depositCoinAmount: {
      const { amount } = action.payload;

      return {
        ...state,
        balance: {
          ...state.balance,
          coins: {
            ...state.balance.coins,
            count: state.balance.coins.count + amount
          }
        }
      };
    }

    default:
      return state;
  }
};

export default userReducer;
