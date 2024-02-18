import { FC, memo, useEffect, useState } from 'react';

import { Tab, Tabs } from '@mui/material';
import { LocalStorageKeys, getLocalStorageItem } from '@/src/utils';

type TSidebar = {};

const Component: FC<TSidebar> = () => {
  const [isSmallSidebar, setIsSmallSidebar] = useState(false);

  const screenSize = getLocalStorageItem(LocalStorageKeys.screenSize);

  useEffect(() => {
    setIsSmallSidebar(screenSize === 'small');
  }, [screenSize]);

  return (
    <Tabs value="Categories" orientation="vertical">
      <Tab value="Categories" label="Categories" />
      <Tab value="Products" label="Products" />
      <Tab value="AboutUs" label="About" />
    </Tabs>
  );
};

export const Sidebar = memo(Component);
