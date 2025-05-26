import React, { useState, Suspense, lazy } from 'react';
import styles from './Workarticles.module.scss'; // 상대경로 최적화!
import workarticles from '../../components/data/workarticles.json';
import { usePopup } from '../../components/Popup/PopupContext';

export default function Workarticles() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(workarticles.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = workarticles.slice(startIdx, startIdx + itemsPerPage);

  const { showPopup } = usePopup();

  const openWorkarticlesModal = (item) => {
    const linkValue = Array.isArray(item.link) ? item.link[0] : item.link;
    let WorkArticlePageComponent = null;
    if (linkValue) {
      WorkArticlePageComponent = lazy(() =>
        import(`./pages/${linkValue}`)
      );
    }
    showPopup(
      <div
        className={styles.workarticles_modal}
        role="dialog"
        aria-modal="true"
        style={{
          width: '90vw',
          maxWidth: 1200,
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '24px',
          background: '#fff',
          borderRadius: '8px',
        }}
      >
        {WorkArticlePageComponent ? (
          <Suspense fallback={<div>로딩 중...</div>}>
            <WorkArticlePageComponent />
          </Suspense>
        ) : (
          <div> 링크가 없습니다.</div>
        )}
      </div>,
      {
        top: '5%',
        left: '50%',
        transform: 'translateX(-50%)',
      }
    )
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Work Articles</h2>
      <ul className={styles.list}>
        {currentItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <div
              className={styles.article_title}
              tabIndex={0}
              onClick={() => openWorkarticlesModal(item)}
              onKeyDown={(e) => e.key === 'Enter' && openWorkarticlesModal(item)}
            >
              {item.title}
            </div>
            <small className={styles.date}>{item.date}</small>
           
          </li>
        ))}
      </ul>

      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 1}
          aria-label="이전 페이지"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={num === currentPage ? styles.active : ''}
          >
            {num}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages}
          aria-label="다음 페이지"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
