import React from 'react';

export default function Project000() {
  return (
    <div className="project-page" style={{ padding: '16px' }}>
      {/* 프로젝트 제목 */}
      <h2>Project 000 Title</h2>

      {/* 이미지: 나중에 경로와 alt 텍스트를 수정하세요 */}
      <img
        src="/images/project000.jpg"
        alt="Project 000 Preview"
        style={{ maxWidth: '100%', height: 'auto', margin: '16px 0' }}
      />

      {/* 설명 텍스트: 나중에 내용을 채워주세요 */}
      <p>
        이곳에 프로젝트 000에 대한 설명을 입력하세요. 나중에 이미지와 텍스트를
        자유롭게 수정하시고, 필요한 컴포넌트나 스타일을 추가하시면 됩니다.
      </p>
    </div>
  );
}
