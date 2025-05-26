// src/component/Contact/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.scss';

const initialState = {
  name: '',
  company: '',
  email: '',
  reason: '',
  message: '',
};

const reasonOptions = [
  '',
  '일반 문의',
  '프로젝트 제안',
  '기술 지원',
  '기타',
];

export default function Contact() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 서버 전송 로직 추가
    console.log('문의내용:', form);
    alert('문의가 전송되었습니다!');
    setForm(initialState);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactGrid}>
<div className={styles.contactIntro}>
  <h2>Contact</h2>
  <h1>
    믿고 맡길 수 있는<br />
    <span className={styles.point}>디지털 파트너</span>가 되겠습니다.
  </h1>
  <p>
    다양한 실무 경험을 바탕으로<br />
    원하는 결과를 꼼꼼하게 완성해 드립니다.<br />
    문의해주시면 신속하고 책임감 있게 진행하겠습니다.
  </p>
</div>

        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>
              성함 <span className={styles.required}>*</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="이름을 입력해 주세요"
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              회사명 <span className={styles.required}>*</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                required
                placeholder="회사명 또는 소속"
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              이메일 <span className={styles.required}>*</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="이메일 주소"
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              <span style={{ color: '#e30047', fontSize: 12 }}>문의 유형</span>
              <select
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
              >
                <option value="">선택해 주세요</option>
                {reasonOptions.slice(1).map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>
          </div>
          <div className={styles.formGroup}>
            <label>
              문의 내용 <span className={styles.required}>*</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="문의하실 내용을 입력해 주세요"
              />
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            전송
          </button>
        </form>

            <div className={styles.contactSteps}>
        <h3>진행 절차 안내</h3>
        <ol>
          <li>
            <b>1</b> 문의 내용을 꼼꼼히 확인한 뒤,<br />
            직접 연락드려 상담 일정을 안내드립니다.
          </li>
          <li>
            <b>2</b> 필요시, 모든 상담 및 작업 내용은<br />
            NDA(비밀유지계약)으로 안전하게 보호해드립니다.
          </li>
          <li>
            <b>3</b> 방향성과 목표를 함께 논의하며,<br />
            맞춤 미팅을 진행합니다.
          </li>
        </ol>
      </div>
      </div>
    </section>
  );
}
