import { useEffect, useState } from 'react';

export const useHandleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode === false) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
      return;
    }
    if (darkMode === true) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
      return;
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDarkMode(true);
    }
    if (localStorage.getItem('theme') === 'light') {
      setDarkMode(false);
    }
  }, []);

  return { toggleDarkMode, darkMode };
};
