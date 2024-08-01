import { createTheme } from '@mui/material/styles';

// Color
const theme = createTheme({
  palette: {
    primary: {
      main: '#E74C3C', // Màu chính
      contrastText: '#F4F4F4', // Màu chữ tương phản
    },
    // Các màu khác
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffa726',
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
