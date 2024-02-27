import { FC, memo } from 'react';

import { TNavTab } from '@/src/types';
import { MenuWithSearch, TMenuWithSearch } from '../MenuWithSearch';

type TAdminMenu = TMenuWithSearch;

const adminMenuTabs: TNavTab[] = [
  { label: 'Categories', value: '/admin/categories' },
  { label: 'Products', value: '/admin/products' },
];

const Component: FC<TAdminMenu> = ({ children }) => (
  <MenuWithSearch hideSearch customTabs={adminMenuTabs}>
    {children}
  </MenuWithSearch>
);

export const AdminMenu = memo(Component);
