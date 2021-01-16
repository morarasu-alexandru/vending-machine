import React from 'react';
import { useSelector } from 'react-redux';

import coin05Ron from '../../img/50Bani.png';

import { State } from '../../store/reducers';
import style from './userPanel.module.scss';
import BankNoteImg from '../../components/bankNoteImg';

const UserPanel: React.FC = () => {
  const userState = useSelector((state: State) => state.userStore);
  const { paperMoney } = userState.balance;
  const coins = [...Array(userState.balance.coins.count)];

  return (
    <aside>
      <h2 className={style.title}>User Panel</h2>
      <div className={style.body}>
        <div>
          <span>User Balance</span>
        </div>
        <div>
          <span>Paper Money</span>
          <ul>
            {paperMoney.map((bankNoteValue, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li key={idx} className={style.bankNoteItem}>
                  <BankNoteImg value={bankNoteValue} />
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <span>Coins</span>
          <ul>
            {coins.map((coin: undefined, idx) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li className={style.coinItem} key={idx}>
                  <img
                    className={style.coinItem__img}
                    src={coin05Ron}
                    alt="50 bani img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default UserPanel;
