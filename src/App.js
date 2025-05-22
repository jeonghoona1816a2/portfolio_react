// src/App.js
import React from 'react';
import './css/App.css';
import './css/Mobile.css';
import './css/layout.scss';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
// Popup과 SettingsForm을 단수 component 폴더에서 불러옵니다.
import { PopupProvider } from './components/Popup/PopupContext';



function App() {
  // // 공지 모달 상태
  // const [showNotice, setShowNotice] = useState(true);
  // // 공지 모달 닫기
  // const closeNotice = () => setShowNotice(false);


  return (
    <div className="App">
     {/* 기존 공지용 모달*/}
      {/* {showNotice && (
        <div
          className="dim"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeNotice}
        >
          <div
            className="popup"
            style={{
              backgroundColor: '#fff',
              padding: '24px',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              maxWidth: '600px',
              width: '80%',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              전정훈의 포트폴리오 사이트는 현재 준비 중입니다.
              <br />
              곧 완성되어 선보일 예정이니 잠시만 기다려 주십시오.
            </span>
          </div>
        </div>
      )} */}


   <PopupProvider>
          <Sidebar />
      {/* 메인 레이아웃 */}
      <div className="main">
        <Header title=" "  />
        <Content />
        <Footer />
      </div>
    </PopupProvider>
    </div>
  );
}

export default App;
