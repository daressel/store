import { FC, memo } from 'react';

import { TCategory } from '@/src/types';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

type TCardCategory = {
  category: TCategory;
};

const CardCategory: FC<TCardCategory> = ({ category }) => {
  return (
    <Card variant="outlined" sx={{ width: '320px' }}>
      <CardHeader title={category.name} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {category.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(CardCategory);
