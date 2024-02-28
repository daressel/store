import { SxProps } from '@mui/material';

export const searchBox: SxProps = {
  position: 'relative',
  borderRadius: '5px',
  marginLeft: 0,
  width: 'max(auto, 100%)',
};

export const searchIconWrapper: SxProps = {
  paddingLeft: '0.5em',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const styledInputBase: SxProps = {
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    transition: 'width 0.3s ease-in-out',
    padding: '10px',
    paddingLeft: `2.5em`,
    border: '1px solid transparent',
    '&:focus': {
      width: '30ch',
      borderColor: 'white',
      borderRadius: '5px',
    },
    '&:hover': {
      borderColor: 'white',
      borderRadius: '5px',
    },
  },
};

export const navBox: SxProps = {
  position: 'sticky',
  top: 0,
};

export const sidebarTab: SxProps = {
  maxWidth: 'unset',
  transition: 'background-color 0.3s ease-out',
  '&:hover': {
    backgroundColor: '#a1a1a1',
  },
};

export const closeSidebarButton: SxProps = {
  position: 'absolute',
  right: 0,
  top: 0,
};
