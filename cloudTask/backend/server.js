// const http = require('http');
// const app = require('./app');
// const mysql = require('mysql');
// const port = process.env.PORT || 3000;
// app.set('port',port)
// const server = http.createServer(app);
// const conn = mysql.createConnection({
//     host: "server29.hosting.reg.ru",
//     user: "u1613997_root",
//     database: "u1613997_cloudtask",
//     password: "zF2vJ2mJ9t",

// });
// conn.connect(err => {
//     if (err) { 
//         console.log(err);
//         return err;
//     } else { 
//         console.log('ok')
//     }
//    });
// server.listen(port);
// let query ="SELECT * FROM  admin";
// conn.query(query, (err, result, field) => {
//   console.log(err);
//   console.log(result);

// })