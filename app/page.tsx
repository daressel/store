import CardProduct from '@/src/components/CardProduct';
import { MenuWithSearch } from '@/src/layouts/MenuWithSearch';
import { TProduct } from '@/src/types';
import { CardList } from '@/src/wrappers';

const cards: TProduct[] = [];

function Home() {
  return (
    <MenuWithSearch>
      <CardList>
        {cards.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </CardList>
    </MenuWithSearch>
  );
}

export default Home;
