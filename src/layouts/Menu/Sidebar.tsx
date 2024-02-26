import { FC, memo } from 'react';

import { Tab, Tabs, Typography } from '@mui/material';
import Link from 'next/link';

type TSidebar = {};

const Component: FC<TSidebar> = () => {
  return (
    <>
      <Typography align="center">Menu</Typography>
      <Tabs value="Categories" orientation="vertical" variant="scrollable">
        <Link href="/categories">
          <Tab value="Categories" label="Categories" />
        </Link>
        <Link href="/products">
          <Tab value="Products" label="Products" />
        </Link>
        <Link href="/about-us">
          <Tab value="About Us" label="About Us" />
        </Link>
      </Tabs>
    </>
  );
};

export const Sidebar = memo(Component);
