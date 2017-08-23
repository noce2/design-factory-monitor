/* eslint linebreak-style: ["error", "windows"] */
const path = require('path');

const index = (req, res, next) => {
  // res.render('index', { title: 'Express' });
  console.log(process.cwd());
  res.sendFile(path.join(process.cwd(), 'public', 'insight360App', 'index.html'));
};

module.exports = {
  index,
};
