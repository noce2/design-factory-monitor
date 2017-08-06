/* eslint linebreak-style: ["error", "windows"] */
const path = require('path');

const createAnAccount = (req, res, next) => {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(process.cwd(), 'app_server', 'views', 'createAnAccount.html'));
};

module.exports = {
  createAnAccount,
};
