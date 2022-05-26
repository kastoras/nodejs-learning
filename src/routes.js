const fs = require('fs');

const requestHandler = (req,res) => {

  const url = req.url;  
  const method =req.method;

  if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input name="message" type="text"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();  
  }

  if(url === '/message' && method === 'POST'){
    const body = [];
    
    req.on('data',(chunk) => {
      body.push(chunk);
    });

    return req.on('end',() => {      
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {        
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });    
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Test</title></head>');
  res.write('<body>Test</body>');
  res.write('</html>');
  res.end();

};

//module.exports = requestHandler;

/*module.exports = {
  handler: requestHandler,
  otherExport: 'some other export'
};*/

exports.handler = requestHandler;
exports.otherExport = 'some other export';
