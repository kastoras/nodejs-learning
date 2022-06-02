const home = (res) => {

  res.write('Welcome to Assignment 1');
  return res.end();

};
exports.home = home;

