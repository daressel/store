import { CardProduct } from '@/src/components';
import { TProduct } from '@/src/types';
import { CardList } from '@/src/wrappers';
import { FC } from 'react';

const cards: TProduct[] = [];

const Products: FC = () => {
  return (
    <CardList>
      {cards.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </CardList>
  );
};

export default Products;
