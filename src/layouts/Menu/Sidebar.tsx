'use client';
import { FC, memo } from 'react';

import { Tab, Tabs, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type TSidebar = {};

const Component: FC<TSidebar> = () => {
  const pathname = usePathname();
  return (
    <>
      <Typography align="center">Menu</Typography>
      <Tabs value={pathname} orientation="vertical" variant="scrollable">
        <Tab label="Main" value="/" href="/" component={Link} />
        <Tab label="Categories" value="/categories" href="/categories" component={Link} />
        <Tab label="Products" value="/products" href="/products" component={Link} />
        <Tab label="About us" value="/about-us" href="/about-us" component={Link} />
      </Tabs>
    </>
  );
};

export const Sidebar = memo(Component);
