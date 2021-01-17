import React, { useState } from 'react';
import { DragDropContext, DragUpdate, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import VendingMachine from '../vendingMachine';
import UserPanel from '../userPanel';
import { UiIds } from '../../utils/ui';
import {
  widthdrawCoin,
  withdrawPaperMoneyByIdx
} from '../../store/actions/userActions';
import { PaperMoney } from '../../store/interfaces&types';
import {
  depositCoin,
  depositPaperMoney
} from '../../store/actions/vendingMachineActions';
import { State } from '../../store/reducers';

const VendingMachineUserWrapper: React.FC = (): JSX.Element => {
  const userState = useSelector((state: State) => state.userStore);
  const {
    balance: { paperMoney }
  } = userState;
  const [isMoneyDragged, setIsMoneyDragged] = useState(false);
  const [isCoinDraggedToInput, setIsCoinDraggedToInput] = useState(false);

  const dispatch = useDispatch();

  const withdrawPaperMoneyByIdxAction = (idx: number) =>
    dispatch(withdrawPaperMoneyByIdx(idx));
  const depositPaperMoneyInputAction = (value: PaperMoney) =>
    dispatch(depositPaperMoney(value));
  const widthdrawCoinAction = () => dispatch(widthdrawCoin());
  const depositCoinAction = () => dispatch(depositCoin());

  const onDragEnd = (result: DropResult) => {
    if (
      result.source.droppableId === UiIds.paperMoneyUser &&
      result.destination?.droppableId === UiIds.paperMoneyVendingInput
    ) {
      const { index } = result.source;
      depositPaperMoneyInputAction(paperMoney[index]);
      withdrawPaperMoneyByIdxAction(index);
    }

    if (
      result.source.droppableId === UiIds.coinsUser &&
      result.destination?.droppableId === UiIds.coinsVendingInput
    ) {
      depositCoinAction();
      widthdrawCoinAction();
    }

    setIsMoneyDragged(false);
    setIsCoinDraggedToInput(false);
  };

  const onDragUpdate = (result: DragUpdate) => {
    if (result.source.droppableId === UiIds.paperMoneyUser) {
      setIsMoneyDragged(true);
    }

    if (result.source.droppableId === UiIds.coinsUser) {
      setIsCoinDraggedToInput(true);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <VendingMachine
        isMoneyDragged={isMoneyDragged}
        isCoinDraggedToInput={isCoinDraggedToInput}
      />
      <UserPanel />
    </DragDropContext>
  );
};

export default VendingMachineUserWrapper;
