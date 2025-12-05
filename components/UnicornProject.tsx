import React, { useEffect } from 'react';

interface UnicornProjectProps {
  projectId?: string;
  width?: number | string;
  height?: number | string;
}

export const UnicornProject: React.FC<UnicornProjectProps> = ({
  projectId = 'u76zOdCy2WxoIalZtiOK',
  width = '1440px',
  height = '900px',
}) => {
  useEffect(() => {
    if (!window.UnicornStudio) {
      // mark it as uninitialized and load the script
      (window as any).UnicornStudio = { isInitialized: false, init: () => {} };

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';
      script.async = true;
      script.onload = () => {
        try {
          if ((window as any).UnicornStudio && !(window as any).UnicornStudio.isInitialized) {
            if (typeof (window as any).UnicornStudio.init === 'function') {
              (window as any).UnicornStudio.init();
            }
            (window as any).UnicornStudio.isInitialized = true;
          }
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('UnicornStudio init error', err);
        }
      };

      (document.head || document.body).appendChild(script);
    } else {
      if ((window as any).UnicornStudio && !(window as any).UnicornStudio.isInitialized) {
        try {
          if (typeof (window as any).UnicornStudio.init === 'function') {
            (window as any).UnicornStudio.init();
          }
          (window as any).UnicornStudio.isInitialized = true;
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('UnicornStudio init error', err);
        }
      }
    }
  }, []);

  const style: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  return (
    <div
      data-us-project={projectId}
      style={style}
    />
  );
};

export default UnicornProject;