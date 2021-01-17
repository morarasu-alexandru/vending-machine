import React, { useContext, useState } from 'react';
import { DragDropContext, DragUpdate, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import VendingMachine from '../vendingMachine';
import UserPanel from '../userPanel';
import { UiIds } from '../../utils/ui';
import {
  depositCoinAmount,
  depositProduct,
  withdrawCoin,
  withdrawPaperMoneyByIdx
} from '../../store/actions/userActions';
import { PaperMoney, Product } from '../../store/interfaces&types';
import {
  clearMoneyFromOutput,
  depositCoin,
  depositPaperMoney,
  withdrawProductFromOutput
} from '../../store/actions/vendingMachineActions';
import { State } from '../../store/reducers';
import { NotificationContext } from '../../context/notificationContext';

const VendingMachineUserWrapper: React.FC = (): JSX.Element => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );
  const userState = useSelector((state: State) => state.userStore);
  const {
    balance: { paperMoney }
  } = userState;
  const { showSuccessNotification } = useContext(NotificationContext);
  const { outputProducts, outputBalanceValue } = vendingMachineState;
  const [isMoneyDragged, setIsMoneyDragged] = useState(false);
  const [isCoinDraggedToInput, setIsCoinDraggedToInput] = useState(false);
  const [isCoinDraggedToUser, setIsCoinDraggedToUser] = useState(false);
  const [isProductDraggedToUser, setIsProductDraggedToUser] = useState(false);

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
  const clearMoneyFromOutputAction = () => dispatch(clearMoneyFromOutput());
  const depositCoinAmountAction = (amount: number) =>
    dispatch(depositCoinAmount(amount));

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

      showSuccessNotification(
        `You took ${outputProducts[sourceProductCode].name}`
      );
    }

    if (
      sourceId === UiIds.coinsVendingOutput &&
      destinationId === UiIds.coinsUser
    ) {
      clearMoneyFromOutputAction();
      depositCoinAmountAction(outputBalanceValue * 2);
      showSuccessNotification(`Taken ${outputBalanceValue} back as coins`);
    }

    setIsMoneyDragged(false);
    setIsCoinDraggedToInput(false);
    setIsCoinDraggedToUser(false);
    setIsProductDraggedToUser(false);
  };

  const onDragUpdate = (result: DragUpdate) => {
    if (result.source.droppableId === UiIds.paperMoneyUser) {
      setIsMoneyDragged(true);
    }

    if (result.source.droppableId === UiIds.coinsUser) {
      setIsCoinDraggedToInput(true);
    }

    if (result.source.droppableId === UiIds.coinsVendingOutput) {
      setIsCoinDraggedToUser(true);
    }

    if (result.source.droppableId === UiIds.vendingOutputArea) {
      setIsProductDraggedToUser(true);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
      <VendingMachine
        isMoneyDragged={isMoneyDragged}
        isCoinDraggedToInput={isCoinDraggedToInput}
      />
      <UserPanel
        isCoinDraggedToUser={isCoinDraggedToUser}
        isProductDraggedToUser={isProductDraggedToUser}
      />
    </DragDropContext>
  );
};

export default VendingMachineUserWrapper;
