import React, { useEffect } from 'react';

export const UnicornProject: React.FC = () => {
  useEffect(() => {
    const scriptId = 'unicorn-studio-script';
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          window.UnicornStudio.init();
          window.UnicornStudio.isInitialized = true;
        }
      };
      document.head.appendChild(script);
    } else if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
       window.UnicornStudio.init();
       window.UnicornStudio.isInitialized = true;
    }
  }, []);

  return (
    <div 
      data-us-project="u76zOdCy2WxoIalZtiOK" 
      style={{ width: '100%', height: '100%' }}
    />
  );
};