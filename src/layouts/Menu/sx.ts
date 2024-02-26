import { SxProps } from '@mui/material';

export const withMenuBoxSx: SxProps = {
  display: 'flex',
};

export const sideBarBoxSx: SxProps = {
  display: 'flex',
  height: '100dvh',
  position: 'fixed',
  backgroundColor: 'transparent',
};

export const contentBoxSx: SxProps = {
  flexGrow: 1,
  marginInline: '20dvw',
};

export const mainBoxSx: SxProps = {
  display: 'flex',
  paddingBlock: '3dvh',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '3dvh',
};