import { FC, memo } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { TProduct } from '@/src/types';

type TCardProduct = {
  product: TProduct;
};

const Component: FC<TCardProduct> = ({ product }) => {
  return (
    <Card variant="outlined" sx={{ width: '320px' }}>
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

export const CardProduct = memo(Component);
