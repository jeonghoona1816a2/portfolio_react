import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: form 전송 로직
    console.log('문의내용:', form);
    alert('전송되었습니다!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            이름:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            이메일:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            메시지:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">전송</button>
      </form>
    </section>
  );
}
