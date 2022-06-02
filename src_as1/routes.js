const default_action = require('./actions/default');
const users_action = require('./actions/users');

const requestHandler = (req,res) => {

  const url = req.url;
  let content = '';

  if(url === '/'){    
    content = default_action.home();
  }

  if(url === '/users'){
    content = users_action.list();
  }

  return buildPage(res,content);

};

const buildPage = (res,content) => {
  res.write('<html>');
  res.write('<head><title>Enter Message</title></head>');
  res.write('<body>');
  res.write(content);
  res.write('</body>');
  res.write('</html>');

  return res.end();
}

exports.handler = requestHandler;
exports.otherExport = 'some other export';
