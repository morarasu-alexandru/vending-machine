import { VendingMachineState } from '../interfaces&types';

const initialState: VendingMachineState = {
  products: {
    '21': {
      count: 3,
      name: 'Bounty',
      price: 3
    },
    '22': {
      count: 0,
      name: 'sandwich',
      price: 5
    },
    '23': {
      count: 2,
      name: 'twix',
      price: 2.5
    },
    '24': {
      count: 5,
      name: 'water',
      price: 3
    },
    '25': {
      count: 0,
      name: 'water',
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
