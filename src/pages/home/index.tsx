import React from 'react';
import VendingMachine from '../../containers/vendingMachine';
import UserPanel from '../../containers/userPanel';

import style from './home.module.scss';

// todo: remove this file

function HomePage() {
  return (
    <div className={style.wrapper}>
      <VendingMachine />
      <UserPanel />
    </div>
  );
}

export default HomePage;
