import { Product } from '../interfaces&types';

export enum UserActionsTypes {
  withdrawPaperMoneyByIdx = 'USER--WITHDRAW-PAPER-MONEY-BY-IDX',
  withdrawCoin = 'USER--WITHDRAW-COIN',
  depositProduct = 'USER--DEPOSIT-PRODUCT',
  depositCoinAmount = 'USER--DEPOSIT-COIN'
}

interface WithdrawPaperMoneyByIdx {
  type: typeof UserActionsTypes.withdrawPaperMoneyByIdx;
  payload: { idx: number };
}

interface WithdrawCoin {
  type: typeof UserActionsTypes.withdrawCoin;
}

interface DepositProduct {
  type: typeof UserActionsTypes.depositProduct;
  payload: { product: Product; productCode: string };
}

interface DepositCoinAmount {
  type: typeof UserActionsTypes.depositCoinAmount;
  payload: { amount: number };
}

export const withdrawPaperMoneyByIdx = (
  idx: number
): WithdrawPaperMoneyByIdx => ({
  type: UserActionsTypes.withdrawPaperMoneyByIdx,
  payload: { idx }
});

export const withdrawCoin = (): WithdrawCoin => ({
  type: UserActionsTypes.withdrawCoin
});

export const depositProduct = (
  product: Product,
  productCode: string
): DepositProduct => ({
  type: UserActionsTypes.depositProduct,
  payload: {
    product,
    productCode
  }
});

export const depositCoinAmount = (amount: number): DepositCoinAmount => ({
  type: UserActionsTypes.depositCoinAmount,
  payload: { amount }
});

export type UserActions =
  | WithdrawPaperMoneyByIdx
  | WithdrawCoin
  | DepositProduct
  | DepositCoinAmount;
