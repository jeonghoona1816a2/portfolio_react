import React, { useState } from 'react';
import styles from './SettingsFrom.module.scss';

export default function SettingsForm({ initialSettings, onSave }) {
  // 초기 설정(theme)이 'dark'인지 여부로 state 초기화
  const [darkMode, setDarkMode] = useState(initialSettings.theme === 'dark');

  // 스위치 토글 핸들러
  const handleToggle = () => {
    setDarkMode(prev => !prev);
  };

  // 폼 제출 핸들러: 새로운 설정 전달 후 부모에서 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ theme: darkMode ? 'dark' : 'light' });
  };

  return (
    <form className={styles.settingsForm} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleToggle}
          />
          <span className={styles.slider} />
        </label>
        <span className={styles.label}>다크 모드</span>
      </div>
      <button type="submit" className={styles.saveButton}>
        저장
      </button>
    </form>
  );
}
// Compare this snippet from src/component/Popup/ModalFrame/Popup.jsx:
// // src/components/Popup/ModalFrame/Popup.jsx