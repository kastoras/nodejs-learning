const default_action = require('./actions/default');
const users_action = require('./actions/users');
const user_create_action = require('./actions/create-user');

const requestHandler = (req,res) => {

  const url = req.url;
  const method = req.method;

  let content = '404 Not found';

  if(url === '/')
    content = default_action.home();

  if(url === '/users')
    content = users_action.list();

  if(url === '/create-user' && method === 'POST'){
    //content = create-users.create(); //not working
  
    const body = [];

    req.on('data',(chunk) => {
      body.push(chunk);
    });

    return req.on('end',() => {      
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      console.log(user);

      return buildPage(res,'User Inserted');;
    });   
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
