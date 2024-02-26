import CardProduct from '@/src/components/CardProduct';
import { Menu } from '@/src/layouts';
import { TProduct } from '@/src/types';
import { CardList } from '@/src/wrappers';

const cards: TProduct[] = [];

function Home() {
  return (
    <Menu>
      <CardList>
        {cards.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </CardList>
    </Menu>
  );
}

export default Home;
