const home = () => {

  return '<form action="/create-user" method="POST"><label>User: </label><input name="message" type="text"><button type="submit">Create</button></form>';

};
exports.home = home;

