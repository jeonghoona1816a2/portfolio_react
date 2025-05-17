// src/App.js
import React, { useState } from 'react';
import './css/App.css';
import './css/Mobile.css';
import './css/layout.scss';

import Sidebar from './component/layout/Sidebar';
import Header from './component/layout/Header';
import Content from './component/layout/Content';


function App() {
    const [showModal, setShowModal] = useState(true);
  return (
    <div className="App">
          <Sidebar />

{showModal && (
  <div
    className="dim"
    style={{
      position: 'fixed',inset: 0,  // top:0, right:0, bottom:0, left:0     
      backgroundColor: 'rgba(0, 0, 0, 0.3)',      // 반투명 어둡게
      backdropFilter: 'blur(5px)',               // Chrome, Firefox 최신
      WebkitBackdropFilter: 'blur(5px)',         // Safari 지원
      display: 'flex',justifyContent: 'center',alignItems: 'center',zIndex: 1000,
    }}
    onClick={() => setShowModal(false)}
  >
    <div
      className="popup"
      style={{ backgroundColor: '#fff',padding: '24px',borderRadius: '8px',boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',maxWidth: '600px',width: '80%',textAlign: 'center',
      }}
      onClick={e => e.stopPropagation()}
    >

      <span>     전정훈의 포트폴리오 사이트는 현재 준비 중입니다.<br/>
        곧 완성되어 선보일 예정이니 잠시만 기다려 주십시오.</span>
    </div>
  </div>
)}

      <div className="main">
        {/* Header에 title prop을 넣어주면 동적으로 변경 가능 */}
        <Header title="대시보드" />
        <Content/>
        <div className="footer">내용</div>
      </div>

    </div>
  );
}


export default App;