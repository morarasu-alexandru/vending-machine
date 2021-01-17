import React from 'react';
import style from '../../containers/vendingMachine/vendingMachine.module.scss';
import noProductImage from '../../img/noProductImage.png';
import { Product } from '../../store/interfaces&types';

interface Props {
  product: Product;
  id: string;
}

const ProductItem: React.FC<Props> = (props) => {
  const { product, id } = props;

  return (
    <>
      <div className={style.productImgContainer}>
        <img
          className={style.productImg}
          src={noProductImage}
          alt={product.name}
        />
      </div>
      <div>name: {product.name}</div>
      <div>price: {product.price}</div>
      <div>count: {product.count}</div>
      <div className={style.codeText}>code id: {id}</div>
    </>
  );
};

export default ProductItem;
