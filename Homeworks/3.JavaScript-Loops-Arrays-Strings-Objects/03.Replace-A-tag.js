var string = '<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>';

string = string.replace('<a','[URL');
string = string.replace('</a>','[/URL]');

console.log(string);