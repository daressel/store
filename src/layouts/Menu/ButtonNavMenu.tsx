'use client';

import { Button, Drawer } from '@mui/material';
import { FC, memo, useCallback, useState } from 'react';
import { Sidebar, TSidebar } from './Sidebar';
import { BlockIds } from '@/src/utils';
import { Menu } from '@mui/icons-material';
import { buttonNavMenu } from './sx';

type ButtonNavMenu = TSidebar;

const Component: FC<ButtonNavMenu> = ({ additionalTabs, customTabs }) => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const toggleDrawer = useCallback(
    (status: boolean) => () => {
      setIsShowDrawer((prev) => status ?? !prev);
    },
    []
  );

  return (
    <>
      <Button id={BlockIds.buttonNavMenuSmallScreen} onClick={toggleDrawer(true)} sx={buttonNavMenu}>
        <Menu />
      </Button>
      <Drawer open={isShowDrawer} onClose={toggleDrawer(false)}>
        <Sidebar additionalTabs={additionalTabs} customTabs={customTabs} />
      </Drawer>
    </>
  );
};

export const ButtonNavMenu = memo(Component);
