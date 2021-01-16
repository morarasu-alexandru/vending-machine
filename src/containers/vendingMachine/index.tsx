import React from 'react';

import ProductViewer from './productViewer';

import style from './vendingMachine.module.scss';

const VendingMachine: React.FC = () => {
  return (
    <main className={style.box}>
      <h2 className={style.title}>Vending Machine</h2>
      <div className={style.body}>
        <div className={style.vendingBody}>
          <ProductViewer />
          <div className={style.vendingRightPanel}>
            <div className={style.vendingCommandPanel} />
            <div className={style.vendingMoneyInput} />
          </div>
        </div>
        <div className={style.vendingFooter}>
          <div className={style.vendingOutputProducts} />
          <div className={style.vendingMoneyOutput} />
        </div>
      </div>
    </main>
  );
};

export default VendingMachine;
