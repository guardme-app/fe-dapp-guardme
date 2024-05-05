import { createTheme } from '@mui/material';

export const theme = {
  colors: {
    primary: {
      '01': '#7B61FF',
      '02': '#917bff',
      '03': '#332963',
      '04': '#003F59',
    },
    secondary: {
      '01': '#2D4059',
      red: '#ff0000',
      green: '#1acc5f',
    },
    neutral: {
      white: '#FFF',
      grey: '#EFEFEF',
      black: '#202020',
      bottom: '#211D28',
    },
    gradient: {
      title: ` linear-gradient(135deg, #56cfe1 5%, #45bfbd 47.53%, #6affdb 83.33%)`,
    },
  },
};

export const themeMUI = createTheme({});
