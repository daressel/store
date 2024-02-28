'use client';

import { FC, memo, useCallback, useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { Sidebar, TSidebar } from './Sidebar';
import { Menu } from '@mui/icons-material';

type MenuButtonMenu = TSidebar;

const Component: FC<MenuButtonMenu> = ({ additionalTabs, customTabs }) => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const toggleDrawer = useCallback(
    (status: boolean) => () => {
      setIsShowDrawer((prev) => status ?? !prev);
    },
    []
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      >
        <Menu />
      </IconButton>
      <Drawer open={isShowDrawer} onClose={toggleDrawer(false)}>
        <Sidebar additionalTabs={additionalTabs} customTabs={customTabs} onClose={toggleDrawer(false)} />
      </Drawer>
    </>
  );
};

export const MenuButton = memo(Component);
