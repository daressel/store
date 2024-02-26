import { FC, ReactNode, memo } from 'react';
import { AppBar, TextField } from '@mui/material';

import { ContentBox, MainBox, SideBarBox, WithMenuBox } from './styled';
import { Sidebar } from './Sidebar';

type TMenu = {
  children: ReactNode;
};

const Component: FC<TMenu> = ({ children }) => (
  <WithMenuBox>
    <SideBarBox></SideBarBox>
    <ContentBox>
      <Sidebar />
      <AppBar
        position="sticky"
        sx={{ backdropFilter: 'blur(2px)', backgroundImage: 'none', backgroundColor: 'transparent' }}
      >
        <TextField id="search" />
      </AppBar>
      <MainBox>{children}</MainBox>
    </ContentBox>
  </WithMenuBox>
);

export const Menu = memo(Component);
