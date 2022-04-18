const { validationResult } = require('express-validator');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;
  
  const university_id = req.body.university_id;
  const nickname = req.body.nickname;
  const admin_name = req.body.admin_name;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    const userDetails = {
      university_id: university_id,
      nickname: nickname,
      admin_name:admin_name,
      password: hashedPassword,
    };

    const result = await User.save(userDetails);

    res.status(201).json({ message: 'User registered!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  console.log(req.body)
  const nickname = req.body.nickname;
  const password = req.body.password;

  try {
    const user = await User.find(nickname);
    console.log(user[0][0])
    if (user[0].length !== 1) {
      const error = new Error('A user with this email could not be found.');
      error.statusCode = 401;
      throw error;
    }

    const storedUserPassword = user[0][0].password;
    // console.log(storedUser.password)
    console.log(password)
    const isEqual = await bcrypt.compare(password, storedUserPassword);
    console.log(isEqual)
    // if (password === storedUserPassword) {
    //   const error = new Error('Wrong password!');
    //   error.statusCode = 401;
    //   throw error;
    // }

    const token = jwt.sign(
      {
        nickname: user[0][0].nickname,
        userId: user[0][0].id,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token, userName: user[0][0].nickname });
    res.status(401).json({err:"invalid"})
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};