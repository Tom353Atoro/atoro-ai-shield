
import React, { useEffect } from 'react';

declare global {
  interface Window {
    neetoCal: {
      embed: (...args: any[]) => void;
      q?: any[];
    };
  }
}

interface NeetoCalPopupProps {
  elementSelector: string;
}

const NeetoCalPopup: React.FC<NeetoCalPopupProps> = ({ elementSelector }) => {
  useEffect(() => {
    // Load NeetoCal script
    const script1 = document.createElement('script');
    script1.innerHTML = "window.neetoCal = window.neetoCal || { embed: function(){(neetoCal.q=neetoCal.q||[]).push(arguments)} };";
    document.head.appendChild(script1);
    
    const script2 = document.createElement('script');
    script2.async = true;
    script2.src = "https://cdn.neetocal.com/javascript/embed.js";
    document.head.appendChild(script2);
    
    // Initialize NeetoCal when script is loaded
    script2.onload = () => {
      window.neetoCal?.embed({
        type: "elementClick",
        id: "2be70b72-7899-4402-8da1-609015e1ee12",
        organization: "atorohq",
        elementSelector: elementSelector,
      });
    };
    
    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      if (document.head.contains(script2)) {
        document.head.removeChild(script2);
      }
    };
  }, [elementSelector]);
  
  return null;
};

export default NeetoCalPopup;
