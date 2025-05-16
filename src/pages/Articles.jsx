import React from 'react';

const articles = [
  { id: 1, title: 'React Hooks 완벽 가이드', date: '2025-04-01' },
  { id: 2, title: 'CSS Modules로 스타일 캡슐화하기', date: '2025-04-15' },
  // 더 추가…
];

export default function Articles() {
  return (
    <section>
      <h2>Articles</h2>
      <ul>
        {articles.map(({ id, title, date }) => (
          <li key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
