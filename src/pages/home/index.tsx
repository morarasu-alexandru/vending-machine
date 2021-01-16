import React from 'react';
import VendingMachine from '../../containers/vendingMachine';
import UserPanel from '../../containers/userPanel';

// todo: remove this file

function HomePage() {
  return (
    <div style={{ display: 'flex' }}>
      <VendingMachine />
      <UserPanel />
    </div>
  );
}

export default HomePage;
