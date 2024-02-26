import CardCategory from '@/src/components/CardCategory';
import { TCategory } from '@/src/types';
import { CardList } from '@/src/wrappers';
import { FC } from 'react';

const cards: TCategory[] = [];

const Categories: FC = () => {
  return (
    <CardList>
      {cards.map((category) => (
        <CardCategory key={category.id} category={category} />
      ))}
    </CardList>
  );
};

export default Categories;
