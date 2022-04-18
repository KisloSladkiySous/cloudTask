const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.post(
  '/signup',
  [
    body('university_id'),
    body('nickname'),
    body('admin_name'),
    body('password').trim().isLength({ min: 4 }),
  ],
  authController.signup
);

router.post('/login', authController.login);

module.exports = router;
