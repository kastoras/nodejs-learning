const home = require('./actions/default');

const requestHandler = (req,res) => {

  const url = req.url;

  if(url === '/'){
    return home;
  }

  if(url === '/users'){
  }

};

exports.handler = requestHandler;
exports.otherExport = 'some other export';
