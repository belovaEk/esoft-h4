import { createContext, useContext, useState, useEffect } from 'react';

const TextSettingsContext = createContext();

export function TextSettingsProvider({ children }) {
  const [textSettings, setTextSettings] = useState({
    color: 'black',
    size: 'medium',
    bold: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('textSettings');
    if (saved) setTextSettings(JSON.parse(saved));
  }, []);

  const updateTextSettings = (newSettings) => {
    setTextSettings(prev => {
      const updated = { ...prev, ...newSettings };
      localStorage.setItem('textSettings', JSON.stringify(updated));
      return updated;
    });
  };

    return (
    <TextSettingsContext.Provider value={{ textSettings, updateTextSettings }}>
      {children}
    </TextSettingsContext.Provider>
  );
}

export function useTextSettings() {
  return useContext(TextSettingsContext);
}

export function useTextStyles() {
  const { textSettings } = useTextSettings();
  
  return {
    color: textSettings.color,
    fontSize: textSettings.size === 'small' ? '16px' : 
             textSettings.size === 'medium' ? '20px' : '22px',
    fontWeight: textSettings.bold ? 'bold' : 'normal',
  };
}