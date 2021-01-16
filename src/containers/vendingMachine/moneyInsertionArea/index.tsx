import React from 'react';

import paperMoneyInputImg from '../../../img/paperMoneyInput.png';
import coinMoneyInputImg from '../../../img/moneyCoinInput.png';

import style from '../vendingMachine.module.scss';

const MoneyInsertionArea = () => {
  return (
    <div className={style.vendingMoneyInput}>
      <div className={style.inputMoneyZone}>
        <div>paper money input</div>
        <img
          className={style.inputMoneyImg}
          src={paperMoneyInputImg}
          alt="paper money input img"
        />
      </div>
      <div className={style.inputMoneyZone}>
        <div>coin input</div>
        <img
          className={style.inputMoneyImg}
          src={coinMoneyInputImg}
          alt="coin money input img"
        />
      </div>
    </div>
  );
};

export default MoneyInsertionArea;
