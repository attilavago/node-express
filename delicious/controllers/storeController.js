exports.myMiddleWare = (req, res, next) => {
  req.name = 'attila';
  res.cookie('name', 'attila is cool', {maxAge: 9000000});
  next();
}

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
}