import React from 'react';
import { useSelector } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import coin05Ron from '../../img/50Bani.png';
import { State } from '../../store/reducers';
import BankNoteImg from '../../components/bankNoteImg';
import { UiIds } from '../../utils/ui';

import style from './userPanel.module.scss';

const UserPanel: React.FC = () => {
  const userState = useSelector((state: State) => state.userStore);
  const { paperMoney } = userState.balance;
  const coins = [...Array(userState.balance.coins.count)];

  return (
    <aside>
      <h2 className={style.title}>User Panel</h2>
      <div className={style.body}>
        {/* <div> */}
        {/*  <span>User Balance</span> */}
        {/* </div> */}
        <div>
          <Droppable droppableId={UiIds.paperMoneyUser}>
            {(provided) => {
              return (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <span>Paper Money</span>
                  <ul>
                    {paperMoney.map((bankNoteValue, idx) => {
                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={idx} className={style.bankNoteItem}>
                          <Draggable
                            draggableId={`paperMoney-${idx.toString()}`}
                            index={idx}
                          >
                            {(draqggableprovided) => (
                              <div
                                ref={draqggableprovided.innerRef}
                                {...draqggableprovided.draggableProps}
                                {...draqggableprovided.dragHandleProps}
                              >
                                <BankNoteImg value={bankNoteValue} />
                              </div>
                            )}
                          </Draggable>
                        </li>
                      );
                    })}
                  </ul>
                  {provided.placeholder}
                </div>
              );
            }}
          </Droppable>
        </div>
        <div>
          <span>Coins</span>
          <Droppable droppableId={UiIds.coinsUser}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ul>
                  {coins.map((coin: undefined, idx) => {
                    return (
                      // eslint-disable-next-line react/no-array-index-key
                      <li className={style.coinItem} key={idx}>
                        <Draggable
                          draggableId={`coin-${idx.toString()}`}
                          index={idx}
                        >
                          {(draggableProvided) => (
                            <div
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.draggableProps}
                              {...draggableProvided.dragHandleProps}
                            >
                              <img
                                className={style.coinItem__img}
                                src={coin05Ron}
                                alt="50 bani img"
                              />
                            </div>
                          )}
                        </Draggable>
                      </li>
                    );
                  })}
                </ul>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </aside>
  );
};

export default UserPanel;
