import React from 'react';

export default function Project001() {
  return (
    <div className="project-page" style={{ padding: '16px' }}>
      {/* 프로젝트 제목 */}
      <h2>Project 000 Title</h2>

      {/* 이미지: 나중에 경로와 alt 텍스트를 수정하세요 */}
      <img
        src="../../../images/portfolio/01-daebeopwon-uiux-freelancer.png" // 이미지 경로
        alt="Project 000 Preview"
        style={{ maxWidth: '100%', height: 'auto', margin: '16px 0' }}
      />

      {/* 설명 텍스트: 나중에 내용을 채워주세요 */}
      <p style={{ fontSize: '16px', lineHeight: '1.5', height: '800px' }}>

    <span className="tip">
      여백은 “비어 있는 공간”이 아니라, <b>디자인의 균형, 가독성, 사용성</b>을 완성하는 핵심 요소입니다.<br/>
      4px/8px 배수 그리드를 활용해 한 단계 높은 완성도의 UI를 만들어보세요!
    </span>
      </p>
    </div>
  );
}
