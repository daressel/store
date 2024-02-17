import { FC, Fragment, memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useScreenSize } from '@/src/hooks';
import Drawer from '@/src/wrapper/Drawer';
import { Box, Tab, Tabs } from '@mui/material';

type TSidebar = {};

export const Sidebar: FC<TSidebar> = memo(function Component() {
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);
  const [isDrawerSidebar, setIsDrawerSidebar] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpenedSidebar((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   console.log(screenSize);
  //   setIsDrawerSidebar(screenSize === 'small');
  // }, [screenSize]);

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
});
