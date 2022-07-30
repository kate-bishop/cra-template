import React, { useState, useEffect, createContext } from 'react';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery';
import { getWindowSize } from './shared/utils/functions';
import { getDesignTokens } from './shared/styles/MuiThemes'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './shared/styles/styles.scss';

export const WindowSizeContext = createContext(getWindowSize());

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => responsiveFontSizes(createTheme(getDesignTokens(prefersDarkMode ? 'dark' : 'light'))), [prefersDarkMode]);

  return (
    <WindowSizeContext.Provider value={windowSize} >
      <ThemeProvider theme={theme}>
        <div className="app">
          <Box
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'background.default',
              color: 'text.primary',
              p: 3,
            }}
          >
            <Typography variant="body1">This is a {theme.palette.mode} mode theme with custom palette</Typography>
          </Box>
        </div>
      </ThemeProvider>
    </WindowSizeContext.Provider>
  );
}

export default App;
