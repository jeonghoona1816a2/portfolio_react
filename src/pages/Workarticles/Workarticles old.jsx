import React, { useState } from 'react';
import './Workarticles.scss'; // CSS 파일 임포트

const workarticles = [
  { id: 1, title: 'React Hooks 완벽 가이드', date: '2025-04-01' },
  { id: 2, title: 'CSS Modules로 스타일 캡슐화하기', date: '2025-04-15' },
  { id: 3, title: 'test1', date: '2025-04-01' },
  { id: 4, title: 'test2', date: '2025-04-15' },
  { id: 5, title: 'test3', date: '2025-04-01' },
  { id: 6, title: 'test4', date: '2025-04-15' },
    { id: 7, title: 'test1', date: '2025-04-01' },
  { id: 8, title: 'test2', date: '2025-04-15' },
  { id: 9, title: 'test3', date: '2025-04-01' },
  { id: 10, title: 'test4', date: '2025-04-15' },
    { id: 11, title: 'test4', date: '2025-04-15' },
    { id: 12, title: 'test1', date: '2025-04-01' },
  { id: 13, title: 'test2', date: '2025-04-15' },
  { id: 14, title: 'test3', date: '2025-04-01' },
  { id: 15, title: 'test4', date: '2025-04-15' },
  // …더 추가
];


export default function Workarticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(workarticles.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = workarticles.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section>
      <h2>Work Articles</h2>

      <ul>
        {currentItems.map(({ id, title, date }) => (
          <li key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {/* 이전 */}
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* 페이지 번호 */}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={num === currentPage ? 'active' : ''}
          >
            {num}
          </button>
        ))}

        {/* 다음 */}
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
