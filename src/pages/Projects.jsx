import React from 'react';

const projectList = [
  { id: 1, title: '전자소송 포털 개선', description: '가상 스크롤 접근성 개선 및 반응형 UI 구현' },
  { id: 2, title: 'React 포트폴리오 사이트', description: 'React, SCSS, Router를 이용한 SPA 포트폴리오' },
  // 더 추가…
];

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projectList.map(({ id, title, description }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
