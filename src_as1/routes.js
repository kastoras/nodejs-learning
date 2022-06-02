const default_action = require('./actions/default');
const users_action = require('./actions/users');

const requestHandler = (req,res) => {

  const url = req.url;

  if(url === '/'){    
    return default_action.home(res);
  }

  if(url === '/users'){
    return users_action.list(res);
  }

};

exports.handler = requestHandler;
exports.otherExport = 'some other export';
