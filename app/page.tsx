'use client';

import { CardProduct } from '@/src/components';
import { withMenu } from '@/src/hocs';
import { CardList } from '@/src/wrappers';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const cards = Array.from(Array(100));

function Home() {
  return (
    <CardList>
      {cards.map((_, index) => (
        <CardProduct
          key={index}
          description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          name="Some name"
          price={100}
        />
      ))}
    </CardList>
  );
}

export default withMenu(Home);
