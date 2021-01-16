import { VendingMachineState } from '../interfaces&types';
import {
  VendingMachineAction,
  VendingMachineActionType
} from '../actions/vendingMachineActionType';

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

const vendingMachineReducer = (
  state = initialState,
  action: VendingMachineAction
): VendingMachineState => {
  switch (action.type) {
    case VendingMachineActionType.addCodeCharacterToCommandPanel: {
      const value = action.payload;

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

    default:
      return state;
  }
};

export default vendingMachineReducer;
