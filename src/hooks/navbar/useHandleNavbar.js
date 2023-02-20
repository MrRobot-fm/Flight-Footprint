import { useEffect, useState } from 'react';

export const useHandleNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleInnerWidth = () => {
    if (window.innerWidth > '1024px') {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);

    if (windowWidth > 1023) {
      setToggle(false);
    }

    return () => {
      window.removeEventListener('resize', setWindowDimensions);
    };
  }, [windowWidth]);

  return { toggle, handleToggle, handleInnerWidth, setToggle };
};
