const express = require('express');
const router = express.Router();
const mysql = require('mysql2');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'tuning'
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속

router.get('/api', (req, res)=>{
 
  
  testQuery = "SELECT * FROM MEMBERS";
  connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.table(results);
    res.send(results);
    });
   
});

router.use(express.json()); 
router.use(express.urlencoded({ extended: false }));

router.post('/api/upload', (req, res) => {
    console.log(req.body);
    
    var testQuery = `INSERT INTO members (username, password) VALUES ('${req.body.username}','${req.body.password}');`;
 
    connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);

    });

});

 

module.exports = router;