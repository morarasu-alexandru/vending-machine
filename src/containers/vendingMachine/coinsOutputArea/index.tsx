import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Draggable, Droppable } from 'react-beautiful-dnd';
import { transferMoneyToOutput } from '../../../store/actions/vendingMachineActions';

import { State } from '../../../store/reducers';
import coin05Ron from '../../../img/50Bani.png';
import multiCoins from '../../../img/multi50Bani.jpg';

import style from '../vendingMachine.module.scss';
import { UiIds } from '../../../utils/ui';
import { NotificationContext } from '../../../context/notificationContext';

const CoinsOutputArea: React.FC = (): JSX.Element => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );
  const { outputBalanceValue, inputBalanceValue } = vendingMachineState;
  const { showInfoNotification } = useContext(NotificationContext);
  const dispatch = useDispatch();

  const transferMoneyToOutputAction = () => {
    dispatch(transferMoneyToOutput());
    showInfoNotification('You requested change');
  };

  return (
    <div className={style.vendingCoinsOutput}>
      <button
        disabled={inputBalanceValue === 0}
        className={style.vendingCoinsOutputButton}
        type="button"
        onClick={transferMoneyToOutputAction}
      >
        Give change
      </button>
      <Droppable droppableId={UiIds.coinsVendingOutput}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={style.coinsOutputWrapper}
          >
            <Draggable draggableId="coins-output" index={0}>
              {(draggableProvided) => (
                <div
                  className={style.coinsImgWrapper}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.draggableProps}
                  {...draggableProvided.dragHandleProps}
                >
                  {outputBalanceValue === 0.5 && (
                    <img
                      className={style.coinImg}
                      src={coin05Ron}
                      alt="50 bani img"
                    />
                  )}
                  {outputBalanceValue > 0.5 && (
                    <img
                      className={style.multiCoinsImg}
                      src={multiCoins}
                      alt="50 bani img"
                    />
                  )}
                </div>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default CoinsOutputArea;
