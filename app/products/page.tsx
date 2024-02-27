import { FC } from 'react';
import { CardList } from '@/src/wrappers';
import CardProduct from '@/src/components/CardProduct';

import { TProduct } from '@/src/types';

const cards: TProduct[] = Array.from(Array(100)).map((_, i) => ({
  categories: [],
  count: 2,
  id: 'some id',
  kWords: [],
  name: 'some name',
  price: 12,
  description: 'some description',
}));

const Products: FC = () => {
  return (
    <>
      <CardList>
        {cards.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </CardList>
    </>
  );
};

export default Products;
