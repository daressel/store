import { FC } from 'react';
import { Menu } from '@/src/layouts';
import { CardList } from '@/src/wrappers';
import CardProduct from '@/src/components/CardProduct';

import { TProduct } from '@/src/types';

const cards: TProduct[] = [];

const Products: FC = () => {
  return (
    <Menu>
      Products
      <CardList>
        {cards.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </CardList>
    </Menu>
  );
};

export default Products;
