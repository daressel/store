'use client';

import { withMenu } from '@/src/hocs';
import { TScreenType } from '@/src/types';
import { LocalStorageKeys, getLocalStorageItem } from '@/src/utils';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const cards = Array.from(Array(100));

type TList = {
  count: number;
};

const List = styled.div<TList>`
  display: grid;
  grid-template-columns: ${({ count }) =>
    Array.from(Array(count))
      .map(() => '1fr')
      .join(' ')};
  gap: 3dvw;
`;

const ColumnCount: Record<TScreenType, number> = {
  large: 3,
  medium: 2,
  small: 1,
};

function Home() {
  const screenSize = getLocalStorageItem<TScreenType>(LocalStorageKeys.screenSize);

  const [count, setCount] = useState<number>(3);

  useEffect(() => {
    setCount(ColumnCount[screenSize] ?? 1);
  }, [screenSize]);

  return (
    <List count={count}>
      {cards.map((_, index) => (
        <Card variant="outlined" key={index}>
          <CardHeader title="asaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaadasd" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </List>
  );
}

export default withMenu(Home);
