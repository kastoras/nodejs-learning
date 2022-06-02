const students = [
  'Nikos','Kostas','Petros','Katia','Maria'
];

let content = '';

const list = () => {

  content += '<ul>';
  students.forEach(student => {
    content += '<li>'+student+'</li>';
  });
  content += '</ul>';

  return content;
};

exports.list = list;

