'use client';

import { CardProduct } from '@/src/components';
import { TProduct } from '@/src/types';
import { CardList } from '@/src/wrappers';

const cards: TProduct[] = [];

function Home() {
  return (
    <CardList>
      {cards.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </CardList>
  );
}

export default Home;
