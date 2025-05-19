// src/Popup/TestForm.jsx
import React from 'react';
import styles from './TestForm.module.scss';
import myimages1  from '../../images/imarges.jpg';

export default function TestForm({

  initialSettings,
  onSave,
  onClose,
  frameStyles = {},



}) {
  return (

<div className={styles.testForm}>
<div style={{ backgroundImage: "url('../../images/imarges.jpg')", height:"100%" }}></div>
<div style={{ backgroundImage: `url(${myimages1})` }}></div>
</div>

  );
}
