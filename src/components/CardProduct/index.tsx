import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import { FC, memo } from 'react';

type TCardProduct = {
  name: string;
  price: number;
  description: string;
};

const Component: FC<TCardProduct> = ({ description, name, price }) => {
  return (
    <Card variant="outlined" sx={{ width: '320px' }}>
      <CardHeader title={name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price} rub
        </Typography>
      </CardContent>
    </Card>
  );
};

export const CardProduct = memo(Component);
