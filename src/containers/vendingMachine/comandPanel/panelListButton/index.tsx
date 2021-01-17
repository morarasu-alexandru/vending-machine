import React from 'react';
// @ts-expect-error
import classNames from 'classnames';

import style from '../../vendingMachine.module.scss';

interface Props {
  readonly value: string;
  readonly onClick?: () => void;
  readonly isDisabled?: boolean;
  readonly isRectangle?: boolean;
}

const PanelListButton: React.FC<Props> = (props): JSX.Element => {
  const { value, onClick, isDisabled, isRectangle } = props;

  return (
    <li className={style.vendingPanelList__item}>
      <button
        type="button"
        disabled={isDisabled}
        onClick={onClick}
        className={classNames(style.vendingPanel__button, {
          [style['vendingPanel__button--is-rectangle']]: isRectangle
        })}
      >
        <div className={style.vendingPanel__buttonText}>{value}</div>
      </button>
    </li>
  );
};

export default PanelListButton;
