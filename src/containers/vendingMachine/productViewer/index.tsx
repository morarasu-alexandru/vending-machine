import React from 'react';
import { useSelector } from 'react-redux';
// @ts-expect-error
import classNames from 'classnames';

import { State } from '../../../store/reducers';
import noProductImage from '../../../img/noProductImage.png';

import style from '../vendingMachine.module.scss';

const ProductViewer = () => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );

  const { products } = vendingMachineState;
  const productsListIds = Object.keys(products);

  return (
    <div className={style.productsViewer}>
      <ul className={style.productsList}>
        {productsListIds.map((id) => {
          return (
            <li
              className={classNames(style.productItem, {
                [style['productItem--noItem']]: products[id].count === 0
              })}
              key={id}
            >
              <div className={style.productImgContainer}>
                <img
                  className={style.productImg}
                  src={noProductImage}
                  alt={products[id].name}
                />
              </div>
              <div>name: {products[id].name}</div>
              <div>price: {products[id].price}</div>
              <div>count: {products[id].count}</div>
              <div className={style.codeText}>code id: {id}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductViewer;
