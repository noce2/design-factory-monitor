/* eslint linebreak-style: ["error", "windows"] */

const index = require('./landingPage').index;
const login = require('./login').login;
const createAnAccount = require('./createAnAccount').createAnAccount;

module.exports = {
  index,
  login,
  createAnAccount,
};
