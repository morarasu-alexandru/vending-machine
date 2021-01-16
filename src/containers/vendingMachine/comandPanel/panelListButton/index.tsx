import React from 'react';

import style from '../../vendingMachine.module.scss';

interface Props {
  readonly value: string;
  readonly onClick?: () => void;
  readonly isDisabled?: boolean;
}

const PanelListButton: React.FC<Props> = (props): JSX.Element => {
  const { value, onClick, isDisabled } = props;

  return (
    <li className={style.vendingPanelList__item}>
      <button
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        className={style.vendingPanel__button}
      >
        <div className={style.vendingPanel__buttonText}>{value}</div>
      </button>
    </li>
  );
};

export default PanelListButton;
