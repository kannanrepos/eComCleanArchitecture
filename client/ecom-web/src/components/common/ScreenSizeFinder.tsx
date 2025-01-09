'use client';
import React, { useEffect, useState } from 'react';

const ScreenSizeFinder = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width >= 1536) return setScreenSize('2xl');
      if (width >= 1280) return setScreenSize('xl');
      if (width >= 1024) return setScreenSize('lg');
      if (width >= 768) return setScreenSize('md');
      if (width >= 640) return setScreenSize('sm');
      if (width >= 375) return setScreenSize('xs');
      return setScreenSize('default');
    };
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);
  return (
    <div className="text-sm bg-primary text-primary-foreground p-2 text-center">
      Current screen size: {screenSize}
    </div>
  );
};

export default ScreenSizeFinder;
