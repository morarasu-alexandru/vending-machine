export enum UserActionsTypes {
  withdrawPaperMoneyByIdx = 'USER--WITHDRAW-PAPER-MONEY-BY-IDX',
  widthdrawCoin = 'USER--WITHDRAW-COIN'
}

interface WithdrawPaperMoneyByIdx {
  type: typeof UserActionsTypes.withdrawPaperMoneyByIdx;
  payload: { idx: number };
}

interface WidthdrawCoin {
  type: typeof UserActionsTypes.widthdrawCoin;
}

export const withdrawPaperMoneyByIdx = (
  idx: number
): WithdrawPaperMoneyByIdx => ({
  type: UserActionsTypes.withdrawPaperMoneyByIdx,
  payload: { idx }
});

export const widthdrawCoin = (): WidthdrawCoin => ({
  type: UserActionsTypes.widthdrawCoin
});

export type UserActions = WithdrawPaperMoneyByIdx | WidthdrawCoin;
