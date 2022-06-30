const fs = require('fs');

const create = (req) => {

  const body = [];
  
  req.on('data',(chunk) => {
    body.push(chunk);
  });

  return req.on('end',() => {      
    const parsedBody = Buffer.concat(body).toString();
    const user = parsedBody.split('=')[1];
    console.log(user);

    return 'User Created';
  });    

};
exports.create = create;
