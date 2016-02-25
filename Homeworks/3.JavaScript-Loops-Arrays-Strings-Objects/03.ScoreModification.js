
function isValid(a){
    if (a<400 && a>0){
        return true;
    }else{
        return false;
    }
}

var arr = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

var numbers = arr.filter(isValid);

for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i]- numbers[i]*0.2;
}
numbers = numbers.sort(function(a,b){ return a -b});

console.log(numbers);