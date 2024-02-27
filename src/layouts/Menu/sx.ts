import { SxProps } from '@mui/material';

export const withMenuBoxSx: SxProps = {
  display: 'flex',
};

export const sideBarBoxSx: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  height: '100dvh',
  position: 'fixed',
  backgroundColor: 'transparent',
  paddingBlock: '15px',
  boxShadow: '1px 0 5px rgba(0,0,0,0.2)',
};

export const contentBoxSx: SxProps = {
  flexGrow: 1,
  marginInline: 'max(20dvw, 60px)',
};

export const mainBoxSx: SxProps = {
  display: 'flex',
  paddingBlock: '3dvh',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '3dvh',
};

export const buttonNavMenu: SxProps = {
  position: 'fixed',
  left: 0,
  top: 0,
  margin: '0px',
  padding: '20px',
};
