import { PaperMoney } from '../interfaces&types';

export enum VendingMachineActionType {
  addCodeCharacterToCommandPanel = 'VENDING-MACHINE--ADD-CODE-CHARACTER-TO-COMMAND-PANEL',
  clearCommandPanel = 'VENDING-MACHINE--CLEAR-COMMAND-PANEL',
  depositPaperMoney = 'VENDING-MACHINE--DEPOSIT-PAPER-MONEY',
  depositCoin = 'VENDING-MACHINE--DEPOSIT-COIN',
  withdrawAvailableMoney = 'VENDING-MACHINE--WITHDRAW-AVAILABLE-MONEY',
  withdrawProduct = 'VENDING-MACHINE--WITHDRAW-PRODUCT'
}

interface AddCodeCharacterToCommandPanel {
  type: typeof VendingMachineActionType.addCodeCharacterToCommandPanel;
  payload: { value: string };
}

interface ClearCommandPanel {
  type: typeof VendingMachineActionType.clearCommandPanel;
}

interface DepositPaperMoney {
  type: typeof VendingMachineActionType.depositPaperMoney;
  payload: { value: PaperMoney };
}

interface DepositCoin {
  type: typeof VendingMachineActionType.depositCoin;
}

interface WithdrawAvailableMoney {
  type: typeof VendingMachineActionType.withdrawAvailableMoney;
  payload: {
    value: number;
  };
}

interface WithdrawProduct {
  type: typeof VendingMachineActionType.withdrawProduct;
  payload: {
    productCode: string;
  };
}

export const insertCodeCharacterToCommandPanel = (
  value: string
): AddCodeCharacterToCommandPanel => ({
  type: VendingMachineActionType.addCodeCharacterToCommandPanel,
  payload: { value }
});

export const depositPaperMoney = (value: PaperMoney): DepositPaperMoney => ({
  type: VendingMachineActionType.depositPaperMoney,
  payload: { value }
});

export const clearCommandPanel = (): ClearCommandPanel => ({
  type: VendingMachineActionType.clearCommandPanel
});

export const depositCoin = (): DepositCoin => ({
  type: VendingMachineActionType.depositCoin
});

export const withdrawAvailableMoney = (
  value: number
): WithdrawAvailableMoney => ({
  type: VendingMachineActionType.withdrawAvailableMoney,
  payload: { value }
});

export const withdrawProduct = (productCode: string): WithdrawProduct => ({
  type: VendingMachineActionType.withdrawProduct,
  payload: { productCode }
});

export type VendingMachineAction =
  | AddCodeCharacterToCommandPanel
  | ClearCommandPanel
  | DepositPaperMoney
  | DepositCoin
  | WithdrawAvailableMoney
  | WithdrawProduct;
