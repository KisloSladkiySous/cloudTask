const express = require('express');

const bodyParser = require('body-parser');
const sequelize = require('sequelize')
const authRoutes = require('./routes/auth');
const db = require("./utils/database")
// const postsRoutes = require('./routes/posts');

// const errorController = require('./controllers/error');

const app = express();

const ports = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use('/auth', authRoutes);

app.get('/lecturer',(req,res) => { 
  db.execute('SELECT * FROM teacher').then(result => { 
    res.send(result[0])
  }).catch(function (err) { 
    console.log(err.message)
  })
  next();
})

app.get('/group',(req,res) => { 
  db.execute('SELECT name_group FROM groups').then(result => { 

    res.send(result[0])
  }).catch(function (err) { 
    console.log(err.message)
  })
  // next();
})

app.get('/subjects',(req,res) => { 
  db.execute('SELECT * FROM subjects').then(result => { 
    res.send(result[0])
  }).catch(function (err) { 
    console.log(err.message)
  })
  // next();
})
// AND  day = ?
// ,req.query.day,
app.get('/lessons',(req,res) => { 
  console.log(req.body)
  const query = 'SELECT * FROM lessons_view WHERE name_group = ?  AND parity = ? AND  day = ?';
  db.query(query,[req.query.name_group,req.query.parity,req.query.day],{prepared:true})
  .then(result => {
    res.send(result[0])
  }).catch(function (err) { 
    console.log(err.message)
  })  
  // next();
})
app.get('/grouped',(req,res) => { 
  const query = 'SELECT * FROM grouped_teacher';
  db.query(query,{prepared:true})
  .then(result => {
    console.log(result[0])
    res.send(result[0])
  }).catch(function (err) { 
    console.log(err.message)
  })
  // next();
})

// app.use('/post', postsRoutes);

// app.use(errorController.get404);

// app.use(errorController.get500);

app.listen(ports, () => console.log(`Listening on port ${ports}`));