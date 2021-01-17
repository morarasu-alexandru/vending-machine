import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateNumberList } from '../../../utils';
import PanelListButton from './panelListButton';

import style from '../vendingMachine.module.scss';
import {
  clearCommandPanel,
  insertCodeCharacterToCommandPanel,
  withdrawAvailableMoney,
  transferProductToOutput
} from '../../../store/actions/vendingMachineActions';
import { State } from '../../../store/reducers';
import { NotificationContext } from '../../../context/notificationContext';

const CommandPanel = () => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );
  const notificationContext = useContext(NotificationContext);
  const { showInfoNotification, showSuccessNotification } = notificationContext;
  const { commandPanelId, inputBalanceValue, products } = vendingMachineState;
  const numberList = generateNumberList(1, 9);
  const dispatch = useDispatch();

  const addCodeCharacterToCommandPanelAction = (value: string) =>
    dispatch(insertCodeCharacterToCommandPanel(value));
  const clearCommandPanelAction = () => dispatch(clearCommandPanel());
  const withdrawAvailableMoneyAction = (value: number) =>
    dispatch(withdrawAvailableMoney(value));
  const withdrawProductAction = (productCode: string) =>
    dispatch(transferProductToOutput(productCode));

  const isNumberButtonDisabled = commandPanelId.length === 2;

  const handleConfirm = () => {
    const product = products[commandPanelId];

    if (product) {
      if (product.price > inputBalanceValue) {
        showInfoNotification(
          `You should add money to Vending Machine in order to buy ${product.name}`
        );
      } else {
        if (product.count === 0) {
          showSuccessNotification(
            'You gave us money for something we do not have. You will not receive your money back, this is the expected behavior'
          );
          clearCommandPanelAction();
        } else {
          withdrawProductAction(commandPanelId);
          showSuccessNotification(`You have bought ${product.name}`);
        }

        withdrawAvailableMoneyAction(product.price);
      }
    } else {
      showInfoNotification(
        'must enter a code of a productItem existing in the vending machine'
      );
    }
  };

  return (
    <div className={style.vendingCommandPanel}>
      <ul className={style.vendingPanelList}>
        {numberList.map((number) => {
          const value = number.toString();

          return (
            <PanelListButton
              isDisabled={isNumberButtonDisabled}
              onClick={() => addCodeCharacterToCommandPanelAction(value)}
              key={number}
              value={value}
            />
          );
        })}
        <PanelListButton
          isDisabled={isNumberButtonDisabled}
          onClick={() => addCodeCharacterToCommandPanelAction('0')}
          value="0"
        />
        <PanelListButton
          onClick={clearCommandPanelAction}
          isDisabled={!(commandPanelId.length > 0)}
          value="Clear"
          isRectangle
        />
        <PanelListButton
          onClick={handleConfirm}
          isDisabled={commandPanelId.length !== 2}
          value="Ok"
          isRectangle
        />
      </ul>
      <div className={style.vendingCommandMonitor}>
        <div>available money: {inputBalanceValue}</div>
        <div>product code: {commandPanelId}</div>
      </div>
    </div>
  );
};

export default CommandPanel;
