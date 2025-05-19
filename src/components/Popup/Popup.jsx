// src/components/Popup/Popup.jsx
import React from 'react';
import styles from './Popup.module.scss';

export default function Popup({
  isOpen,
  onClose,
  children,
  frameStyles = {}        // A에서 위치·크기·기타 스타일을 전달할 수 있도록
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.frame}
        style={frameStyles}   // 여기에 A에서 받은 스타일이 적용됩니다
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close popup"
        >
          닫기
        </button>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
