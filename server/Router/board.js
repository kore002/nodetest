const express = require('express');
const router = express.Router();
const mysql = require('mysql2');  // mysql 모듈 로드
const conn = {  // mysql 접속 설정
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'sample'
};
var connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속

router.get('/api/v1/boardlist', (req, res)=>{
 
  
  testQuery = "SELECT * FROM TEST_BOARD";
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

router.post('/api/v1/boardtext', (req, res) => {
    console.log(req.body);
    
    var testQuery = `INSERT INTO members (BD_ID, BD_TI, BD_CO) VALUES ('${req.body.BD_CO}','${req.body.BD_TI}', '${req.body.BD_CO}');`;
 
    connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);

    });

});

 

module.exports = router;