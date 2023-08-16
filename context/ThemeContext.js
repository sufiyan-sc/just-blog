'use client';
import { createContext, useState } from 'react';

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('dark');
  const modeToggle = () => {
    setMode((prevMode) => {
      return prevMode === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, modeToggle }}>
      <div className={mode}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
