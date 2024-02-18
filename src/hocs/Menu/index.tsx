'use client';

import { FC } from 'react';

import { AppBar, MenuItem, TextField, ThemeProvider, Toolbar, createTheme } from '@mui/material';
import { Sidebar } from './Sidebar';
import { useScreenSize } from '@/src/hooks';
import { ContentBox, MainBox, SideBarBox, WithMenuBox } from './styled';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#101418',
      paper: '#0F1924',
    },
  },
});

export const withMenu = (Component: FC) => {
  return function ComponentWithMenuLayout(props: any) {
    useScreenSize();
    return (
      // <ThemeProvider
      // theme={darkTheme}
      // >
      <WithMenuBox>
        <SideBarBox>
          <Sidebar />
        </SideBarBox>
        <ContentBox>
          <AppBar
            position="sticky"
            sx={{ backdropFilter: 'blur(2px)', backgroundImage: 'none', backgroundColor: 'transparent' }}
          >
            <TextField id="asd" />
          </AppBar>
          <MainBox>
            <Component {...props} />
          </MainBox>
        </ContentBox>
      </WithMenuBox>
      // </ThemeProvider>
    );
  };
};
