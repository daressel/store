'use client';
import { FC, memo, useCallback, useMemo } from 'react';

import { Box, IconButton, Tab, Tabs, Typography } from '@mui/material';
import { ArrowBack, Category } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TNavTab } from '@/src/types';
import { closeSidebarButton, sidebarTab } from './sx';

export type TSidebar = {
  customTabs?: TNavTab[];
  additionalTabs?: TNavTab[];
  onClose?: () => void;
};

const defaultTabs: TNavTab[] = [
  { label: 'Categories', value: '/categories' },
  { label: 'Products', value: '/products' },
  { label: 'About us', value: '/about-us' },
  { label: 'Admin', value: '/admin' },
];

const Component: FC<TSidebar> = ({ customTabs, additionalTabs, onClose }) => {
  const pathname = usePathname();
  const navTabs: TNavTab[] = useMemo(() => {
    if (customTabs) {
      return customTabs;
    }

    return [...defaultTabs, ...(additionalTabs ?? [])];
  }, [customTabs, additionalTabs]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <Box
      sx={{
        width: 'min(520px, 100dvw)',
      }}
    >
      <Typography align="center" variant="h4" sx={{ marginBlock: '5px' }}>
        Menu
      </Typography>
      <IconButton onClick={handleClose} sx={closeSidebarButton}>
        <ArrowBack />
      </IconButton>
      <Tabs value={pathname} orientation="vertical" variant="scrollable">
        <Tab label="Main" value="/" href="/" component={Link} sx={sidebarTab} />
        {navTabs.map((tabData) => (
          <Tab
            label={tabData.label}
            icon={<Category />}
            iconPosition="start"
            key={tabData.value}
            value={tabData.value}
            href={tabData.value}
            component={Link}
            sx={sidebarTab}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export const Sidebar = memo(Component);
