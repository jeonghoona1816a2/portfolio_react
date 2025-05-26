// const express = require('express');
// const fs = require('fs');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// app.post('/api/contact', (req, res) => {
//   const data = req.body;
//   fs.appendFile('contact.txt', JSON.stringify(data) + '\n', (err) => {
//     if (err) {
//       res.status(500).send('저장 실패');
//     } else {
//       res.send('저장 성공');
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`서버 실행 중: http://localhost:${PORT}`);
// });
const express = require('express');
const { MongoClient } = require('mongodb'); // MongoDB 드라이버 추가!
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Atlas에서 받은 URI로 변경

const uri = 'mongodb+srv://a1816a254:W8SxJz71w02x1Pqg@cluster0.ynmz1lw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

app.post('/api/contact', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('portfolio');        // 원하는 DB 이름
    const contacts = db.collection('contacts'); // 원하는 컬렉션(테이블) 이름
    const result = await contacts.insertOne(req.body);
    res.send('저장 성공 (MongoDB)');
  } catch (err) {
    res.status(500).send('DB 저장 실패');
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
