'use client';

import { Button, Drawer } from '@mui/material';
import { FC, memo, useCallback, useState } from 'react';
import { Sidebar } from './Sidebar';
import { BlockIds } from '@/src/utils';
import { Menu } from '@mui/icons-material';
import { buttonNavMenu } from './sx';

const Component: FC = () => {
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
        <Sidebar />
      </Drawer>
    </>
  );
};

export const ButtonNavMenu = memo(Component);
