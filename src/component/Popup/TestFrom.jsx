import React, { useState } from 'react';
import styles from './TestForm.module.scss';

export default function TestForm({ initialData, onSave }) {
  const [value, setValue] = useState(initialData.value || '');

  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ value });
  };

  return (
    <form className={styles.testForm} onSubmit={handleSubmit}>
      <label htmlFor="test-input" className={styles.label}>
        테스트 입력:
      </label>
      <input
        id="test-input"
        type="text"
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        저장
      </button>
    </form>
  );
}