const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);



app.use('/measure', (req, res, next) => {
    const startTime = Date.now();  // 시작 시간 기록
    console.log('Start measuring...');
    next();
    const elapsedTime = Date.now() - startTime;  // 측정 시간 계산
    console.log(`Elapsed time: ${elapsedTime}ms`);
  });
  
app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  
app.get('/measure', (req, res) => {
    res.send('This is a measure route.');
  });
  
app.listen(3000, () => {
    console.log('App listening on port 3000!');
  });

  