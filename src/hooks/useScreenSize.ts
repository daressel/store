'use client';

import { useCallback, useEffect, useState } from 'react';

type TScreenType = 'medium' | 'small' | 'large';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<TScreenType>('large');

  const resize = useCallback(() => {
    const width = window.innerWidth;
    const isLarge = width >= 1000;
    const isMedium = !isLarge && width >= 500;
    const isSmall = !isMedium && !isLarge;

    let newScreenSize: TScreenType = 'large';
    switch (true) {
      case isLarge:
        newScreenSize = 'large';
        break;
      case isMedium:
        newScreenSize = 'medium';
        break;
      case isSmall:
        newScreenSize = 'small';
        break;
      default:
        newScreenSize = 'large';
    }

    setScreenSize(newScreenSize);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return screenSize;
};
