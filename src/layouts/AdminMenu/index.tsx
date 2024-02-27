import { FC, memo } from 'react';

import { TNavTab } from '@/src/types';

import { TMenu, Menu } from '..';

type TAdminMenu = TMenu;

const adminMenuTabs: TNavTab[] = [
  { label: 'Categories', value: '/admin/categories' },
  { label: 'Products', value: '/admin/products' },
];

const Component: FC<TAdminMenu> = ({ children }) => (
  <Menu hideSearch customTabs={adminMenuTabs}>
    {children}
  </Menu>
);

export const AdminMenu = memo(Component);
