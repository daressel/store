import { FC, Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react';

import Drawer from '@/src/wrapper/Drawer';
import { Box, Tab, Tabs } from '@mui/material';
import { LocalStorageKeys, getLocalStorageItem } from '@/src/utils';

type TSidebar = {};

const Component: FC<TSidebar> = () => {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [isDrawerSidebar, setIsDrawerSidebar] = useState(false);

  const screenSize = getLocalStorageItem(LocalStorageKeys.screenSize);

  const toggleSidebar = useCallback(() => {
    setIsOpenedSidebar((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsDrawerSidebar(screenSize === 'small');
  }, [screenSize]);

  const [WrapperComponent, wrapperComponentProps] = useMemo(() => {
    const component = isDrawerSidebar ? Drawer : Fragment;
    const componentProps = isDrawerSidebar ? { toggle: toggleSidebar, isOpened: isOpenedSidebar } : {};
    return [component, componentProps];
  }, [isDrawerSidebar, toggleSidebar, isOpenedSidebar]);

  return (
    //@ts-ignore
    <WrapperComponent {...wrapperComponentProps}>
      <Box>
        <Tabs>
          <Tab value="Categories" label="Categories" />
          <Tab value="Products" label="Products" />
          <Tab value="About Us" label="About" />
        </Tabs>
      </Box>
    </WrapperComponent>
  );
};

export const Sidebar = memo(Component);
