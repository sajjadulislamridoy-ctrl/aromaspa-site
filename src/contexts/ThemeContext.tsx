import React, { createContext, useContext, ReactNode } from 'react';

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children, defaultTheme }: { children: ReactNode, defaultTheme: string }) => {
  return (
    <ThemeContext.Provider value={{ theme: defaultTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
