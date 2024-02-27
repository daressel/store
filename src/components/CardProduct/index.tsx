import { FC, memo } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { TProduct } from '@/src/types';
import { cardSx } from '../generalSx';

type TCardProduct = {
  product: TProduct;
};

const CardProduct: FC<TCardProduct> = ({ product }) => {
  return (
    <Card variant="outlined" sx={cardSx}>
      <CardHeader title={product.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price} rub
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(CardProduct);
