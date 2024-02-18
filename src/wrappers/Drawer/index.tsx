import { FC, ReactNode, memo, useCallback } from 'react';

import { Drawer as BaseDrawer } from '@mui/material';

type TDrawer = {
  toggle: () => void;
  isOpened: boolean;
  children: ReactNode;
};

const Drawer: FC<TDrawer> = ({ isOpened, toggle, children }) => {
  const handleOnClose = useCallback(() => {
    toggle();
  }, [toggle]);
  return (
    <BaseDrawer onClose={handleOnClose} open={isOpened}>
      {children}
    </BaseDrawer>
  );
};

export default memo(Drawer);
