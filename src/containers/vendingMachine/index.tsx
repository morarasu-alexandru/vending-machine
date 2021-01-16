import React from 'react';

import style from './vendingMachine.module.scss';

const VendingMachine: React.FC = () => {
  return (
    <main className={style.title}>
      <h2 className={style.title}>Vending Machine</h2>
      <div className={style.body}>vendingMachine body</div>
    </main>
  );
};

export default VendingMachine;
