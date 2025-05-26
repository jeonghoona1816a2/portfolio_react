import React, { useState } from 'react';
import styles from './SettingsFrom.module.scss';

export default function SettingsForm({ initialSettings, onSave }) {
  const [darkMode, setDarkMode] = useState(initialSettings.theme === 'dark');
  const [fontSize, setFontSize] = useState(initialSettings.fontSize || 'medium');
  const [skin, setSkin] = useState(initialSettings.skin || 'default');

  // 관리자로 이동
  const goAdmin = () => {
    window.location.href = '/admin';
    // 또는 react-router 사용 시: useNavigate()('/admin')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      theme: darkMode ? 'dark' : 'light',
      fontSize,
      skin
    });
  };

  return (
    <form className={styles.settingsForm} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.switch}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(prev => !prev)}
          />
          <span className={styles.slider} />
        </label>
        <span className={styles.label}>다크 모드</span>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>폰트 크기</label>
        <select
          value={fontSize}
          onChange={e => setFontSize(e.target.value)}
        >
          <option value="small">작게</option>
          <option value="medium">보통</option>
          <option value="large">크게</option>
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>스킨</label>
        <select
          value={skin}
          onChange={e => setSkin(e.target.value)}
        >
          <option value="default">기본</option>
          <option value="blue">파랑</option>
          <option value="green">초록</option>
        </select>
      </div>

      <button type="submit" className={styles.saveButton}>저장</button>
      <button
        type="button"
        className={styles.adminButton}
        style={{ marginLeft: 8, background: '#df347f', color: '#fff' }}
        onClick={goAdmin}
      >
        관리자 모드
      </button>
    </form>
  );
}
