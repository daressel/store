import { FC } from 'react';
import { CardList } from '@/src/wrappers';
import CardCategory from '@/src/components/CardCategory';

import { TCategory } from '@/src/types';

const cards: TCategory[] = [];

const Categories: FC = () => {
  return (
    <>
      Categories
      <CardList>
        {cards.map((category) => (
          <CardCategory key={category.id} category={category} />
        ))}
      </CardList>
    </>
  );
};

export default Categories;
