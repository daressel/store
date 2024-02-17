'use client';

import { FC } from 'react';

import { AppBar, Box, MenuItem, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import { Sidebar } from './Sidebar';
import { useScreenSize } from '@/src/hooks';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const withMenu = (Component: FC) => {
  return function ComponentWithMenuLayout(props: any) {
    useScreenSize();
    return (
      <ThemeProvider theme={darkTheme}>
        <Box>
          <AppBar position="fixed">
            <Toolbar>
              <MenuItem>qweqwe</MenuItem>
              asdasd
            </Toolbar>
          </AppBar>
          <Box>
            <Component {...props} />
          </Box>
        </Box>
        <Sidebar />
      </ThemeProvider>
    );
  };
};
