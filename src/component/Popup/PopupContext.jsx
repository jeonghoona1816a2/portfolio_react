// src/component/Popup/PopupContext.jsx
import React, { createContext, useContext, useState } from 'react';
import Popup from './Popup';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [popup, setPopup] = useState({
    isOpen: false,
    content: null,
    frameStyles: {}
  });

  const showPopup = (content, frameStyles = {}) => {
    setPopup({ isOpen: true, content, frameStyles });
  };

  const closePopup = () => {
    setPopup(p => ({ ...p, isOpen: false }));
  };

  return (
    <PopupContext.Provider value={{ showPopup, closePopup }}>
      {children}
      <Popup
        isOpen={popup.isOpen}
        onClose={closePopup}
        frameStyles={popup.frameStyles}
      >
        {popup.content}
      </Popup>
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error('usePopup must be used inside PopupProvider');
  return ctx;
}
