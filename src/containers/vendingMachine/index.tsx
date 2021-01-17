import React from 'react';

import ProductViewer from './productViewer';
import CommandPanel from './comandPanel';
import MoneyInsertionArea from './moneyInsertionArea';
import ProductsExitArea from './productsExitArea';
import CoinsOutputArea from './coinsOutputArea';

import style from './vendingMachine.module.scss';

interface Props {
  isMoneyDragged: boolean;
  isCoinDraggedToInput: boolean;
}

const VendingMachine: React.FC<Props> = (props): JSX.Element => {
  const { isMoneyDragged, isCoinDraggedToInput } = props;

  return (
    <main className={style.box}>
      <h2 className={style.title}>Vending Machine</h2>
      <div className={style.body}>
        <div className={style.vendingBody}>
          <ProductViewer />
          <div className={style.vendingRightPanel}>
            <CommandPanel />
            <MoneyInsertionArea
              isMoneyDragged={isMoneyDragged}
              isCoinDraggedToInput={isCoinDraggedToInput}
            />
          </div>
        </div>
        <div className={style.vendingFooter}>
          <ProductsExitArea />
          <CoinsOutputArea />
        </div>
      </div>
    </main>
  );
};

export default VendingMachine;
