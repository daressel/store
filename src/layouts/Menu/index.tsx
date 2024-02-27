import { FC, ReactNode, memo } from 'react';
import { AppBar, Box, TextField } from '@mui/material';

import { contentBoxSx, mainBoxSx, sideBarBoxSx, withMenuBoxSx } from './sx';
import { Sidebar, TSidebar } from './Sidebar';
import { BlockIds } from '@/src/utils';
import { ButtonNavMenu } from './ButtonNavMenu';

export type TMenu = TSidebar & {
  children: ReactNode;
  hideSearch?: boolean;
};

const Component: FC<TMenu> = ({ children, hideSearch, additionalTabs, customTabs }) => (
  <Box sx={withMenuBoxSx}>
    <ButtonNavMenu />
    <Box sx={sideBarBoxSx} id={BlockIds.sidebarWithNavMenu}>
      <Sidebar additionalTabs={additionalTabs} customTabs={customTabs} />
    </Box>
    <Box sx={contentBoxSx}>
      <AppBar
        position="sticky"
        sx={{ backdropFilter: 'blur(2px)', backgroundImage: 'none', backgroundColor: 'transparent' }}
      >
        {!hideSearch && <TextField id="items" />}
      </AppBar>
      <Box sx={mainBoxSx}>{children}</Box>
    </Box>
  </Box>
);

export const Menu = memo(Component);
