import { createTheme } from '@mui/material/styles';

export const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(253,253,253,0.99)',
    },
    secondary: {
      main: '#000000',
    },
    text: {
      primary: 'rgba(8,8,8,0.87)',
      secondary: '#213ffa',
    },
    background: {
        paper: '#FFFFFF',
        default:'#FFFFFF'
      },
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
});