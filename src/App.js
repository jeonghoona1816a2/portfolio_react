// src/App.js
import React from 'react';
import './css/App.css';
import './css/Common.css';
import './css/Mobile.css';
import './css/layout.scss';

import Sidebar from './component/layout/Sidebar';
import Header from './component/layout/Header';
import Content from './component/layout/Content';


function App() {
  return (
    <div className="App">
      <Sidebar />

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