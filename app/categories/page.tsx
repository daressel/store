import { FC } from 'react';
import { Menu } from '@/src/layouts';
import { CardList } from '@/src/wrappers';
import CardCategory from '@/src/components/CardCategory';

import { TCategory } from '@/src/types';

const cards: TCategory[] = [];

const Categories: FC = () => {
  return (
    <Menu>
      Categories
      <CardList>
        {cards.map((category) => (
          <CardCategory key={category.id} category={category} />
        ))}
      </CardList>
    </Menu>
  );
};

export default Categories;
