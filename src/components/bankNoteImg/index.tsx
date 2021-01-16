import React from 'react';

import { PaperMoney } from '../../store/interfaces&types';
import paper1Ron from '../../img/1Ron.jpg';
import paper5Ron from '../../img/5Ron.jpg';
import paper10Ron from '../../img/10Ron.jpg';
import style from './bankNoteImg.module.scss';

interface Props {
  value: PaperMoney;
}

const BankNoteImg: React.FC<Props> = (props): JSX.Element => {
  const { value } = props;
  let elem;

  switch (value) {
    case 1:
      elem = (
        <img
          className={style.bankNoteItem__img}
          src={paper1Ron}
          alt="1 ron img"
        />
      );
      break;
    case 5:
      elem = (
        <img
          className={style.bankNoteItem__img}
          src={paper5Ron}
          alt="5 ron img"
        />
      );
      break;
    case 10:
      elem = (
        <img
          className={style.bankNoteItem__img}
          src={paper10Ron}
          alt="10 ron img"
        />
      );
      break;
    default:
      elem = <span>no paper money</span>;
  }

  return elem;
};

export default BankNoteImg;
