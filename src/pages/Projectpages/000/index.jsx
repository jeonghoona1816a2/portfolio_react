import React from 'react';
import Project000 from './000';

// 해당 페이지의 진입점 컴포넌트
export default function Project000Index() {
  return (
    <div className="project-page-wrapper" style={{ padding: '16px' }}>
      {/* 공통 레이아웃 요소 (헤더, 여백 등) 삽입 가능 */}
      <Project000 />
    </div>
  );
}
