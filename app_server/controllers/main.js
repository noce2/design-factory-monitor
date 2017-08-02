/* eslint linebreak-style: ["error", "windows"] */
const index = (req, res, next) => {
  res.render('index', { title: 'Express' });
};

module.exports = {
  index,
};
