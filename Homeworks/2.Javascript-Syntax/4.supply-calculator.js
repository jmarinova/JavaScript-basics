function calcSupply(age, maxAge, food, foodPerDay){
    var leftYears = maxAge - age;
    var days = leftYears*365;
    var quality = days*foodPerDay;

    console.log(quality + "kg of " + food + " would be enough until I am " + maxAge + " years old.")
}
calcSupply(16, 102, "nuts", 1.1);