var p,
    element;

p = document.createElement('p');
p.innerHTML = "Some Text";

element = document.getElementById('wrapper');
element.appendChild(p);

/*
var paragraph = document.createElement('p');
var node = document.createTextNode("Some text");

paragraph.appendChild(node);
var element = document.getElementById('wrapper');
element.appendChild(paragraph);
    */