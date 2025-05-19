// src/component/layout/Header/Header.jsx
import React from 'react';
import styles from './Header.module.scss';
import { Settings, MessageCircle } from 'lucide-react';
import { usePopup } from '../../Popup/PopupContext';
import SettingsForm from '../../Popup/SettingsForm';
import TestForm from '../../Popup/TestForm';


export default function Header({ title }) {

  const { showPopup } = usePopup();
  const openSettings = () => {
    showPopup(
      <SettingsForm
        initialSettings={{ theme: 'light' }}
        onSave={newSettings => {
          // …저장 로직…
        }}
      />,
      {
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px'
    
      }
    );
  };

  const openTestForm = () => {
    showPopup(
      <TestForm/>,
      {
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%'
      }
    );
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
     <div>
      <button type="button" className={styles.TestFormButton} onClick={openTestForm} aria-label="테스트 열기">
        <MessageCircle />
       </button>

      <button type="button" className={styles.settingsButton} onClick={openSettings} aria-label="설정 열기" >
        <Settings />
      </button>

     </div>
   
    </header>
  );
}