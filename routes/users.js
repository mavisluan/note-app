const express = require('express');
const router = express.Router();
const _ = require('lodash');

const {User} = require('../models/user');
const { authenticate } = require('../middleware/authenticate');

// CREATE
router.post('/', async (req, res) => {
  const body = _.pick(req.body, ['name', 'email', 'password']);
  const user = new User(body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.header('x-auth', token).send(user);
  } catch(e) {
    res.status(400).send(e)
  }
});


// READ
router.get('/me', authenticate, (req, res) => {
  res.send(req.user)
});


// LOGIN
router.post('/login', async (req, res) => {
  try {
    const body = _.pick(req.body, ['email', 'password']);
    const user = await  User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    res.header('x-auth', token).send(user)
  } catch(e) {
    res.status(400).send()
  }
});


// DELETE
router.delete('/me/token', authenticate, async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    res.status(200).send()
  } catch (e) {
    res.status(400).send()
  }
});

module.exports = router;
