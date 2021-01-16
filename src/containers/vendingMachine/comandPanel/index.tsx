import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { generateNumberList } from '../../../utils';
import PanelListButton from './panelListButton';

import style from '../vendingMachine.module.scss';
import {
  addCodeCharacterToCommandPanel,
  clearCommandPanel
} from '../../../store/actions/vendingMachineActionType';
import { State } from '../../../store/reducers';

const CommandPanel = () => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );
  const { commandPanelId } = vendingMachineState;
  const numberList = generateNumberList(1, 9);
  const dispatch = useDispatch();

  const addCodeCharacterToCommandPanelAction = (value: string) =>
    dispatch(addCodeCharacterToCommandPanel(value));
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
        />
        <PanelListButton isDisabled={commandPanelId.length !== 2} value="Ok" />
      </ul>
      <div className={style.vendingCommandMonitor}>
        <div> : available money</div>
        <div>{commandPanelId} : product code</div>
      </div>
    </div>
  );
};

export default CommandPanel;
