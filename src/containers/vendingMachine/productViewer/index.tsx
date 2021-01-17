import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { State } from '../../../store/reducers';

import style from '../vendingMachine.module.scss';
import ProductItem from '../../../components/productItem';

const ProductViewer: React.FC = (): JSX.Element => {
  const vendingMachineState = useSelector(
    (state: State) => state.vendingMachineStore
  );

  const { products } = vendingMachineState;
  const productsListIds = Object.keys(products);

  return (
    <div className={style.productsViewer}>
      <ul className={style.productsList}>
        {productsListIds.map((id) => {
          const product = products[id];

          return (
            <li
              className={classNames(style.productItem, {
                [style['productItem--noItem']]: product.count === 0
              })}
              key={id}
            >
              <ProductItem product={product} id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductViewer;
