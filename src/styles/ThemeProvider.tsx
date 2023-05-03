import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const darkTheme = {
  background: '#222',
  color: '#fff',
  buttonBackground: '#3e8e41',
  buttonColor: '#fff',
  border: '1px solid black',
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={darkTheme}>
      {children}
    </StyledThemeProvider>
  );
};
