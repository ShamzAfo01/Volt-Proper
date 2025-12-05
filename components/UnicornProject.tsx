import React, { useEffect } from 'react';

interface UnicornProjectProps {
  projectId?: string;
  width?: number | string;
  height?: number | string;
}

export const UnicornProject: React.FC<UnicornProjectProps> = ({
  projectId = 'u76zOdCy2WxoIalZtiOK',
  width = '100%',
  height = '100%',
}) => {
  useEffect(() => {
    const UNICORN_SRC =
      'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js';

    // follow the snippet's pattern: if no global, set isInitialized flag and inject script
    if (!(window as any).UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false };

      // avoid injecting the same script multiple times
      const existing = document.querySelector(`script[src="${UNICORN_SRC}"]`) as HTMLScriptElement | null;
      if (!existing) {
        const s = document.createElement('script');
        s.src = UNICORN_SRC;
        s.async = true;
        s.onload = () => {
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
        (document.head || document.body).appendChild(s);
      } else {
        // script exists, wait for it to load then init
        if (existing.hasAttribute('data-loaded')) {
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
        } else {
          existing.addEventListener('load', () => {
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
          });
        }
      }
    } else {
      // global exists - ensure initialized
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
    }

    // no teardown - UnicornStudio manages its own canvas
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