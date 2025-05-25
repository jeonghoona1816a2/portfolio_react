const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const data = req.body;
  fs.appendFile('contact.txt', JSON.stringify(data) + '\n', (err) => {
    if (err) {
      res.status(500).send('저장 실패');
    } else {
      res.send('저장 성공');
    }
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
