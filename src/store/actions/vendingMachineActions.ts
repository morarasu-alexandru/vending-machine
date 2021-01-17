import { PaperMoney } from '../interfaces&types';

export enum VendingMachineActionType {
  addCodeCharacterToCommandPanel = 'VENDING-MACHINE--ADD-CODE-CHARACTER-TO-COMMAND-PANEL',
  clearCommandPanel = 'VENDING-MACHINE--CLEAR-COMMAND-PANEL',
  depositPaperMoney = 'VENDING-MACHINE--DEPOSIT-PAPER-MONEY',
  depositCoin = 'VENDING-MACHINE--DEPOSIT-COIN'
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

export type VendingMachineAction =
  | AddCodeCharacterToCommandPanel
  | ClearCommandPanel
  | DepositPaperMoney
  | DepositCoin;
