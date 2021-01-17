import React from 'react';
import { useSelector } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import classNames from 'classnames';
import coin05Ron from '../../img/50Bani.png';
import { State } from '../../store/reducers';
import BankNoteImg from '../../components/bankNoteImg';
import { UiIds } from '../../utils/ui';

import style from './userPanel.module.scss';
import ProductItem from '../../components/productItem';

interface Props {
  isCoinDraggedToUser: boolean;
  isProductDraggedToUser: boolean;
}

const UserPanel: React.FC<Props> = (props) => {
  const { isCoinDraggedToUser, isProductDraggedToUser } = props;
  const userState = useSelector((state: State) => state.userStore);
  const {
    balance: { paperMoney },
    products
  } = userState;
  const coins = [...Array(userState.balance.coins.count)];

  const productsListIds = Object.keys(products);

  return (
    <aside>
      <h2 className={style.title}>User Panel</h2>
      <div className={style.body}>
        {/* <div> */}
        {/*  <span>User Balance</span> */}
        {/* </div> */}
        <div>
          <span>Paper Money</span>
          <Droppable droppableId={UiIds.paperMoneyUser}>
            {(provided) => {
              return (
                <div
                  className={style.userStashArea}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
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
              <div
                className={classNames(style.userStashArea, {
                  [style['userStashArea--gray']]: isCoinDraggedToUser
                })}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
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
        <div>
          <span>Products Stash</span>
          <Droppable droppableId={UiIds.userStashArea}>
            {(provided) => (
              <div
                className={classNames(style.userStashArea, {
                  [style['userStashArea--gray']]: isProductDraggedToUser
                })}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <ul className={style.productsList}>
                  {productsListIds.map((id) => {
                    const product = products[id];

                    return (
                      <li
                        className={classNames(
                          style.productItem,
                          style['productItem--small'],
                          style['productItem--noBorder'],
                          {
                            [style['productItem--noItem']]: product.count === 0
                          }
                        )}
                        key={id}
                      >
                        <ProductItem
                          product={product}
                          id={id}
                          size="small"
                          showCodeId={false}
                          showPrice={false}
                        />
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
