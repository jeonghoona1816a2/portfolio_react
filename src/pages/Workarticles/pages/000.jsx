import React, { useState } from 'react';

export default function Workarticles001() {
  // 1~10 랜덤 정답 숫자
  const [answer] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('1~10 중에서 숫자를 맞춰보세요!');

  const checkGuess = () => {
    const guess = parseInt(input, 10);
    if (isNaN(guess)) {
      setMessage('숫자를 입력하세요!');
    } else if (guess === answer) {
      setMessage('정답! 다시 시작하려면 새로고침 하세요 :)');
    } else if (guess > answer) {
      setMessage('너무 높아요!');
    } else {
      setMessage('너무 낮아요!');
    }
  };

  return (
    <div style={{ padding: 24, textAlign: 'center' }}>
      <h3>숫자 맞추기 게임</h3>
      <p>{message}</p>
      <input
        type="number"
        min={1}
        max={10}
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ marginRight: 8 }}
        disabled={message.startsWith('정답')}
      />
      <button onClick={checkGuess} disabled={message.startsWith('정답')}>
        확인
      </button>
    </div>
  );
}
