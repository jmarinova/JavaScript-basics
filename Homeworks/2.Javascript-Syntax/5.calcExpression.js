function calculate(form){
    var input = document.getElementById('input');
    var submit = document.getElementById('confirm');

    var result = eval(input.value).toString();

    submit.addEventListener('click', function (e) {
        return document.getElementById('result').innerHTML = result;
    })
}