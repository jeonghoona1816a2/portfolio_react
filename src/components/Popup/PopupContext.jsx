// src/component/Popup/PopupContext.jsx
import React, { createContext, useContext, useState } from 'react';
import Popup from './Popup';

const PopupContext = createContext();

/**isOpen: 팝업이 열려 있는지 여부(true/false).

content: 팝업 안에 렌더링할 React 노드(예: <TestForm/>).

frameStyles: 팝업 컨테이너에 적용할 CSS 스타일 객체. */
export function PopupProvider({ children }) {
  const [popup, setPopup] = useState({
    isOpen: false,
    content: null,
    frameStyles: {}
  });

  /**content: 보여줄 컴포넌트를 인자로 받음.

frameStyles: 팝업 크기·위치 등 스타일을 객체 형태로 받음(기본값은 빈 객체).

상태를 { isOpen: true, ... } 형태로 갱신해 팝업을 열도록 함.

 */
  const showPopup = (content, frameStyles = {}) => {
    setPopup({ isOpen: true, content, frameStyles });
  };

  /**이전 상태(p)를 복사한 뒤 isOpen: false만 변경.

이로써 팝업이 닫히고, content와 frameStyles는 그대로 유지됩니다(필요시 초기화 로직 추가 가능). */
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
/**useContext(PopupContext)로 Context 값을 가져옴.

만약 Provider 밖에서 호출되면 ctx가 undefined이므로 에러를 던져 잘못된 사용을 방지.

정상적이라면 { showPopup, closePopup } 객체를 반환. */
export function usePopup() {
  const ctx = useContext(PopupContext);
  if (!ctx) throw new Error('usePopup must be used inside PopupProvider');
  return ctx;
}
