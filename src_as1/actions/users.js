const students = [
  'Nikos','Kostas','Petros','Katia','Maria'
];

const list = (res) => {

  res.write('<html>');
  res.write('<head><title>Enter Message</title></head>');
  res.write('<body>');
  res.write('<ul>');
  students.forEach(student => {
    res.write('<li>'+student+'</li>')
  });
  res.write('</ul>');
  res.write('</body>');
  res.write('</html>');

  return res.end();

};

exports.list = list;

