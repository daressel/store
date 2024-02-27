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
    '&:focus': {
      width: '30ch',
      border: '1px solid white',
      borderRadius: '5px',
    },
    '&:hover': {
      width: '30ch',
      border: '1px solid white',
      borderRadius: '5px',
    },
  },
};
