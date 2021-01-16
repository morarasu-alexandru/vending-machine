import { VendingMachineState } from '../interfaces&types';

const initialState: VendingMachineState = {
  products: {},
  balance: {
    paperMoney: [],
    coins: {
      count: 10
    }
  },
  commandPanelInput: '',
  inputBalance: {
    paperMoney: [],
    coins: {
      count: 0
    }
  },
  outputBalance: {
    paperMoney: [],
    coins: {
      count: 0
    }
  }
};

// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const vendingMachineReducer = (state = initialState, action): initialState => {
  return state;
};

export default vendingMachineReducer;
