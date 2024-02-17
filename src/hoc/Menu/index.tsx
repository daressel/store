'use client';

import { FC, useCallback, useState } from 'react';

import { AppBar, Box, Icon, IconButton, MenuItem, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import Sidebar from './Sidebar';
import { Menu } from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const withMenu = (Component: FC) => {
  return function ComponentWithMenuLayout(props: any) {
    const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);

    const toggleSidebar = useCallback(() => {
      setIsOpenedSidebar((prev) => !prev);
    }, []);

    return (
      <ThemeProvider theme={darkTheme}>
        <Box>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton onClick={toggleSidebar}>
                <Menu />
              </IconButton>
              <MenuItem>qweqwe</MenuItem>
              asdasd
            </Toolbar>
          </AppBar>
          <Box>
            <Component {...props} />
          </Box>
        </Box>
        <Sidebar toggle={toggleSidebar} isOpened={isOpenedSidebar} />
      </ThemeProvider>
    );
  };
};

export default withMenu;
