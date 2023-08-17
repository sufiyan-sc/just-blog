'use client';
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import styles from './LightDarkMode.module.css';
const LightDarkMode = () => {
  const { mode, modeToggle } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={modeToggle}>
      <div className="icon">⚫</div>
      <div className="icon">⚪</div>
      <div
        className={styles.circle}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default LightDarkMode;
