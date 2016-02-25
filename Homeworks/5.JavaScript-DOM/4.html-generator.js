var paragraph = document.createElement('p');
var node = document.createTextNode("Some text");
paragraph.appendChild(node);

var wrapperElement = document.getElementById('wrapper');
wrapperElement.appendChild(paragraph);

var div = document.createElement('div');
div.className = "section";
wrapperElement.appendChild(div);

var link = document.createElement('a');
var linkNode = document.createTextNode("C# basics book");
link.appendChild(linkNode);

link.setAttribute("href", "http://www.introprogramming.info/");
var book = document.getElementById('book');
book.appendChild(link);