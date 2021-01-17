import React from 'react';

import VendingMachineUserWrapper from '../../containers/vendingMachineUserWrapper';

import style from './home.module.scss';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <VendingMachineUserWrapper />
    </div>
  );
};

export default HomePage;
