import { Drawer } from '@mui/material';
import { FC, memo, useCallback } from 'react';

type TSidebar = {
  toggle: () => void;
  isOpened: boolean;
};

const Sidebar: FC<TSidebar> = ({ isOpened, toggle }) => {
  const handleOnClose = useCallback(() => {
    toggle();
  }, [toggle]);
  return (
    <Drawer onClose={handleOnClose} open={isOpened}>
      qweqwe
    </Drawer>
  );
};

export default memo(Sidebar);
