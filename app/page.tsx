'use client';

import { withMenu } from '@/src/hocs';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';

const cards = Array.from(Array(100));

function Home() {
  return (
    <>
      {cards.map((_, index) => (
        <Card variant="outlined" sx={{ maxWidth: 345 }} key={index}>
          <CardHeader title="asdasd" />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
              of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default withMenu(Home);
