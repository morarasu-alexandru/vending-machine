import { VendingMachineState } from '../interfaces&types';
import {
  VendingMachineAction,
  VendingMachineActionType
} from '../actions/vendingMachineActions';
import { coinValue } from '../constants';

const initialState: VendingMachineState = {
  products: {
    '21': {
      count: 3,
      name: 'Bounty',
      price: 3
    },
    '22': {
      count: 0,
      name: 'Sandwich',
      price: 5
    },
    '23': {
      count: 2,
      name: 'Twix',
      price: 2.5
    },
    '24': {
      count: 1,
      name: 'Water',
      price: 3
    },
    '25': {
      count: 0,
      name: 'Water',
      price: 3
    },
    '26': {
      count: 4,
      name: 'Cheetos',
      price: 4
    }
  },
  balance: {
    paperMoney: [],
    coins: {
      count: 10
    }
  },
  commandPanelId: '',
  inputBalanceValue: 0,
  outputBalanceValue: 0
};

const vendingMachineReducer = (
  state = initialState,
  action: VendingMachineAction
): VendingMachineState => {
  switch (action.type) {
    case VendingMachineActionType.addCodeCharacterToCommandPanel: {
      const { value } = action.payload;

      return {
        ...state,
        commandPanelId: state.commandPanelId + value
      };
    }
    case VendingMachineActionType.clearCommandPanel: {
      return {
        ...state,
        commandPanelId: initialState.commandPanelId
      };
    }
    case VendingMachineActionType.depositPaperMoney: {
      const { value } = action.payload;
      let newInputBalanceValue = state.inputBalanceValue + value;
      let newPaperMoney = [...state.balance.paperMoney, value];

      return {
        ...state,
        balance: {
          ...state.balance,
          paperMoney: newPaperMoney
        },
        inputBalanceValue: newInputBalanceValue
      };
    }

    case VendingMachineActionType.depositCoin: {
      const newInputBalanceValue = state.inputBalanceValue + coinValue;
      const newCoinCount = state.balance.coins.count + 1;

      return {
        ...state,
        balance: {
          ...state.balance,
          coins: {
            ...state.balance.coins,
            count: newCoinCount
          }
        },
        inputBalanceValue: newInputBalanceValue
      };
    }

    case VendingMachineActionType.withdrawAvailableMoney: {
      const { value } = action.payload;

      const newInputBalanceValue = state.inputBalanceValue - value;

      return {
        ...state,
        inputBalanceValue: newInputBalanceValue
      };
    }

    case VendingMachineActionType.withdrawProduct: {
      const { productCode } = action.payload;
      const product = state.products[productCode];

      let newProduct = { ...product };
      newProduct.count -= 1;

      return {
        ...state,
        products: {
          ...state.products,
          [productCode]: newProduct
        }
      };
    }

    default:
      return state;
  }
};

export default vendingMachineReducer;
