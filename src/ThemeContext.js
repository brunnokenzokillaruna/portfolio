import React, { createContext, useContext } from 'react';

// Theme context for light/dark mode
const ThemeContext = createContext();

// Provider component for theme state
export function ThemeProvider({ children, value }) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to access current theme
export function useTheme() {
  return useContext(ThemeContext);
}
