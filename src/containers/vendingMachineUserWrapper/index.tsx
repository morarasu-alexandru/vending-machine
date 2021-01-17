import React, { useState } from 'react';
import { DragDropContext, DragUpdate, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import VendingMachine from '../vendingMachine';
import UserPanel from '../userPanel';
import { UiIds } from '../../utils/ui';
import {
  depositProduct,
  withdrawCoin,
  withdrawPaperMoneyByIdx
} from '../../store/actions/userActions';
import { PaperMoney, Product } from '../../store/interfaces&types';
import {
  depositCoin,
  depositPaperMoney,
  withdrawProductFromOutput
} from '../../store/actions/vendingMachineActions';
import { State } from '../../store/reducers';

const VendingMachineUserWrapper: React.FC = (): JSX.Element => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );
  const userState = useSelector((state: State) => state.userStore);
  const {
    balance: { paperMoney }
  } = userState;
  const { outputProducts } = vendingMachineState;
  const [isMoneyDragged, setIsMoneyDragged] = useState(false);
  const [isCoinDraggedToInput, setIsCoinDraggedToInput] = useState(false);

  const dispatch = useDispatch();

  const withdrawPaperMoneyByIdxAction = (idx: number) =>
    dispatch(withdrawPaperMoneyByIdx(idx));
  const depositPaperMoneyInputAction = (value: PaperMoney) =>
    dispatch(depositPaperMoney(value));
  const widthdrawCoinAction = () => dispatch(withdrawCoin());
  const depositCoinAction = () => dispatch(depositCoin());
  const withdrawProductFromOutputAction = (productCode: string) =>
    dispatch(withdrawProductFromOutput(productCode));
  const depositProductAction = (product: Product, productCode: string) =>
    dispatch(depositProduct(product, productCode));

  const onDragEnd = (result: DropResult) => {
    const sourceId = result.source.droppableId;
    const destinationId = result.destination?.droppableId;

    if (
      sourceId === UiIds.paperMoneyUser &&
      destinationId === UiIds.paperMoneyVendingInput
    ) {
      const { index } = result.source;
      depositPaperMoneyInputAction(paperMoney[index]);
      withdrawPaperMoneyByIdxAction(index);
    }

    if (
      sourceId === UiIds.coinsUser &&
      destinationId === UiIds.coinsVendingInput
    ) {
      depositCoinAction();
      widthdrawCoinAction();
    }

    if (
      sourceId === UiIds.vendingOutputArea &&
      destinationId === UiIds.userStashArea
    ) {
      const sourceProductCode = result.source.index.toString();

      withdrawProductFromOutputAction(sourceProductCode);
      depositProductAction(
        outputProducts[sourceProductCode],
        sourceProductCode
      );
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
