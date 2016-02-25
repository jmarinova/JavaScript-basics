
function isNumber(number){
    if (isNaN(number)){
        return false;
    } else{
        return true;
    }
}

var arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined,
            0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];

var numbers = arr.filter(isNumber);

numbers = numbers.sort(function(a,b){ return b - a});

for (var i = 0; i < numbers.length - 1; i++) {
    if(numbers[i+1]===numbers[i]){
        var frequent = numbers[i];
    }
}
console.log("Min number:" + numbers.slice(numbers.length-1,numbers.length));
console.log("Max number:" + numbers.slice(0,1));
console.log("Most frequent number:" + frequent);

console.log(numbers);
