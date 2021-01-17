import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { generateNumberList } from '../../../utils';
import PanelListButton from './panelListButton';

import style from '../vendingMachine.module.scss';
import {
  insertCodeCharacterToCommandPanel,
  clearCommandPanel
} from '../../../store/actions/vendingMachineActions';
import { State } from '../../../store/reducers';

const CommandPanel = () => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );
  const { commandPanelId, inputBalanceValue } = vendingMachineState;
  const numberList = generateNumberList(1, 9);
  const dispatch = useDispatch();

  const addCodeCharacterToCommandPanelAction = (value: string) =>
    dispatch(insertCodeCharacterToCommandPanel(value));
  const clearCommandPanelAction = () => dispatch(clearCommandPanel());

  const isNumberButtonDisabled = commandPanelId.length === 2;

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
