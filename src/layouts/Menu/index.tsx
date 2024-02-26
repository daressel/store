import { FC, ReactNode, memo } from 'react';
import { AppBar, Box, SxProps, TextField } from '@mui/material';

import { contentBoxSx, mainBoxSx, sideBarBoxSx, withMenuBoxSx } from './sx';
import { Sidebar } from './Sidebar';

type TMenu = {
  children: ReactNode;
};

const Component: FC<TMenu> = ({ children }) => (
  <Box sx={withMenuBoxSx}>
    <Box sx={sideBarBoxSx}>
      <Sidebar />
    </Box>
    <Box sx={contentBoxSx}>
      <AppBar
        position="sticky"
        sx={{ backdropFilter: 'blur(2px)', backgroundImage: 'none', backgroundColor: 'transparent' }}
      >
        <TextField id="items" />
      </AppBar>
      <Box sx={mainBoxSx}>{children}</Box>
    </Box>
  </Box>
);

export const Menu = memo(Component);
