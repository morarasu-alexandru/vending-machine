import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { Draggable, Droppable } from 'react-beautiful-dnd';
import style from '../vendingMachine.module.scss';
import { State } from '../../../store/reducers';
import ProductItem from '../../../components/productItem';
import { UiIds } from '../../../utils/ui';

const ProductsExitArea: React.FC = (): JSX.Element => {
  const vendingMchineState = useSelector(
    (state: State) => state.vendingMachineStore
  );

  const { outputProducts } = vendingMchineState;
  const outputProductsListIds = Object.keys(outputProducts);

  return (
    <div className={style.vendingOutputProducts}>
      <Droppable droppableId={UiIds.vendingOutputArea}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <ul className={style.productsList}>
              {outputProductsListIds.map((id) => {
                const product = outputProducts[id];

                return (
                  <li
                    className={classNames(
                      style.productItem,
                      style['productItem--small'],
                      style['productItem--noBorder'],
                      {
                        [style['productItem--noItem']]: product.count === 0
                      }
                    )}
                    key={id}
                  >
                    <Draggable
                      draggableId={`productid-${id}`}
                      index={parseInt(id, 10)}
                    >
                      {(draggableProvided) => (
                        <div
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <ProductItem
                            product={product}
                            id={id}
                            size="small"
                            showCodeId={false}
                            showPrice={false}
                          />
                        </div>
                      )}
                    </Draggable>
                  </li>
                );
              })}
            </ul>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ProductsExitArea;
