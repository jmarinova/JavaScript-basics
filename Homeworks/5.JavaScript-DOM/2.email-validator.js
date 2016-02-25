
var line = document.getElementById('email');
var divElementText = document.getElementById('divColor').innerHTML;
var divElement;

function validEmail(email){
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return regex.test(email);
}

var btnValidate = document.getElementsByTagName('button');
console.log(btnValidate[0]);


btnValidate[0].addEventListener('click', function (ev) {
    divElement = document.getElementById('divColor');
    divElement.innerHTML = line.value;

    var validation = validEmail(line.value);
    console.log(line.value);
    console.log(validation);
    console.log(divElement);

    if (validation){
        divElement.style.background = 'green';
    }else{
        divElement.style.background = 'red';
    }
})

/*function validateInput(){
    var line = document.getElementById('email').value;
    var divElement = document.getElementById('divColor').innerHTML;
    divElement = line;

    function validEmail(email){
        var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return regex.test(email);
    }

    var validation = validEmail(line);
    console.log(validation);

    if (validation){
        var color = document.getElementById('divColor');
        color.style.background = "green";
    }else{
        document.getElementById('divColor').style.background = "red";
    }
}
*/