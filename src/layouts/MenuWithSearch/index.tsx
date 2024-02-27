import { FC, ReactNode, memo } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { navBox, searchBox, searchIconWrapper, styledInputBase } from './sx';
import { TSidebar } from './Sidebar';
import { MenuButton } from './MenuButton';

export type TMenuWithSearch = TSidebar & {
  children: ReactNode;
  hideSearch?: boolean;
};

const Component: FC<TMenuWithSearch> = ({ children, hideSearch, additionalTabs, customTabs }) => {
  return (
    <Box>
      <Box sx={navBox}>
        <AppBar position="static">
          <Toolbar>
            <MenuButton additionalTabs={additionalTabs} customTabs={customTabs} />
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              MUI
            </Typography>
            <Box sx={searchBox}>
              <Box sx={searchIconWrapper}>
                <SearchIcon />
              </Box>
              {!hideSearch && (
                <InputBase sx={styledInputBase} placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </Box>
  );
};

export const MenuWithSearch = memo(Component);
