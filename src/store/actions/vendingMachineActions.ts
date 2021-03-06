import { PaperMoney } from '../interfaces&types';

export enum VendingMachineActionType {
  addCodeCharacterToCommandPanel = 'VENDING-MACHINE--ADD-CODE-CHARACTER-TO-COMMAND-PANEL',
  clearCommandPanel = 'VENDING-MACHINE--CLEAR-COMMAND-PANEL',
  depositPaperMoney = 'VENDING-MACHINE--DEPOSIT-PAPER-MONEY',
  depositCoin = 'VENDING-MACHINE--DEPOSIT-COIN',
  withdrawAvailableMoney = 'VENDING-MACHINE--WITHDRAW-AVAILABLE-MONEY',
  transferProductToOutput = 'VENDING-MACHINE--TRANSFER-PRODUCT-TO-OUTPUT',
  withdrawProductFromOutput = 'VENDING-MACHINE--WITHDRAW-PRODUCT-FROM-OUTPUT',
  transferMoneyToOutput = 'VENDING-MACHINE--TRANSFER-MONEY-TO-OUTPUT',
  clearMoneyFromOutput = 'VENDING-MACHINE--CLEAR-MONEY-FROM-OUTPUT'
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

interface TransferProductToOutput {
  type: typeof VendingMachineActionType.transferProductToOutput;
  payload: {
    productCode: string;
  };
}

interface WithdrawProductFromOutput {
  type: typeof VendingMachineActionType.withdrawProductFromOutput;
  payload: {
    productCode: string;
  };
}

interface TransferMoneyToOutput {
  type: typeof VendingMachineActionType.transferMoneyToOutput;
}

interface ClearMoneyFromOutput {
  type: typeof VendingMachineActionType.clearMoneyFromOutput;
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

export const transferProductToOutput = (
  productCode: string
): TransferProductToOutput => ({
  type: VendingMachineActionType.transferProductToOutput,
  payload: { productCode }
});

export const withdrawProductFromOutput = (
  productCode: string
): WithdrawProductFromOutput => ({
  type: VendingMachineActionType.withdrawProductFromOutput,
  payload: { productCode }
});

export const transferMoneyToOutput = (): TransferMoneyToOutput => ({
  type: VendingMachineActionType.transferMoneyToOutput
});

export const clearMoneyFromOutput = (): ClearMoneyFromOutput => ({
  type: VendingMachineActionType.clearMoneyFromOutput
});

export type VendingMachineAction =
  | AddCodeCharacterToCommandPanel
  | ClearCommandPanel
  | DepositPaperMoney
  | DepositCoin
  | WithdrawAvailableMoney
  | TransferProductToOutput
  | WithdrawProductFromOutput
  | TransferMoneyToOutput
  | ClearMoneyFromOutput;
