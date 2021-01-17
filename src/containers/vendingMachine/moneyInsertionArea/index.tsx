import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';

import paperMoneyInputImg from '../../../img/paperMoneyInput.png';
import coinMoneyInputImg from '../../../img/moneyCoinInput.png';
import { UiIds } from '../../../utils/ui';

import style from '../vendingMachine.module.scss';

interface Props {
  isMoneyDragged: boolean;
  isCoinDraggedToInput: boolean;
}

const MoneyInsertionArea: React.FC<Props> = (props) => {
  const { isMoneyDragged, isCoinDraggedToInput } = props;

  return (
    <div className={style.vendingMoneyInput}>
      <div className={style.inputMoneyZone}>
        <div>paper money input</div>
        <Droppable droppableId={UiIds.paperMoneyVendingInput}>
          {(provided) => {
            return (
              <div
                className={style.inputMoneyImgWrapper}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <img
                  className={classNames(style.inputMoneyImg, {
                    [style['inputMoneyImg--moneyOver']]: isMoneyDragged
                  })}
                  src={paperMoneyInputImg}
                  alt="paper money input img"
                />
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
      </div>
      <div className={style.inputMoneyZone}>
        <div>coin input</div>
        <Droppable droppableId={UiIds.coinsVendingInput}>
          {(provided) => (
            <div
              className={style.inputMoneyImgWrapper}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <img
                className={classNames(style.inputMoneyImg, {
                  [style['inputMoneyImg--moneyOver']]: isCoinDraggedToInput
                })}
                src={coinMoneyInputImg}
                alt="coin money input img"
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default MoneyInsertionArea;
