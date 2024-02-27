'use client';
import { FC, memo, useMemo } from 'react';

import { Tab, Tabs, Typography } from '@mui/material';
import { Category } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TNavTab } from '@/src/types';

export type TSidebar = {
  customTabs?: TNavTab[];
  additionalTabs?: TNavTab[];
};

const defaultTabs: TNavTab[] = [
  { label: 'Categories', value: '/categories' },
  { label: 'Products', value: '/products' },
  { label: 'About us', value: '/about-us' },
  { label: 'Admin', value: '/admin' },
];

const Component: FC<TSidebar> = ({ customTabs, additionalTabs }) => {
  const pathname = usePathname();
  const navTabs: TNavTab[] = useMemo(() => {
    if (customTabs) {
      return customTabs;
    }

    return [...defaultTabs, ...(additionalTabs ?? [])];
  }, [customTabs, additionalTabs]);

  return (
    <>
      <Typography align="center">Menu</Typography>
      <Tabs value={pathname} orientation="vertical" variant="scrollable">
        <Tab label="Main" value="/" href="/" component={Link} />
        {navTabs.map((tabData) => (
          <Tab
            label={tabData.label}
            icon={<Category />}
            iconPosition="start"
            key={tabData.value}
            value={tabData.value}
            href={tabData.value}
            component={Link}
          />
        ))}
      </Tabs>
    </>
  );
};

export const Sidebar = memo(Component);
