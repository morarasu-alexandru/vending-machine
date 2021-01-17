import React from 'react';
import classNames from 'classnames';

import noProductImage from '../../img/noProductImage.png';
import { Product } from '../../store/interfaces&types';
import style from './productItem.module.scss';

interface Props {
  product: Product;
  id: string;
  size?: 'small' | 'medium';
  showPrice?: boolean;
  showCodeId?: boolean;
}

const defaultProps: Props = {
  product: { price: 0, name: '', count: 0 },
  id: '',
  size: 'medium',
  showPrice: true,
  showCodeId: true
};

const ProductItem: React.FC<Props> = (props) => {
  const { product, id, size, showPrice, showCodeId } = props;

  return (
    <>
      <div
        className={classNames(style.productImgContainer, {
          [style['productImgContainer--small']]: size === 'small'
        })}
      >
        <img
          className={classNames(style.productImg, {
            [style['productImg--small']]: size === 'small'
          })}
          src={noProductImage}
          alt={product.name}
        />
      </div>
      <div>name: {product.name}</div>
      {showPrice && <div>price: {product.price}</div>}
      <div>count: {product.count}</div>
      {showCodeId && <div className={style.codeText}>code id: {id}</div>}
    </>
  );
};

ProductItem.defaultProps = defaultProps;

export default ProductItem;
