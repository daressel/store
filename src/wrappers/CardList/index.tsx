import { Box } from '@mui/material';
import { FC, ReactNode, memo } from 'react';

type TCardList = {
  children: ReactNode;
};

const Component: FC<TCardList> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '3dvh',
      }}
    >
      {children}
    </Box>
  );
};

export const CardList = memo(Component);
