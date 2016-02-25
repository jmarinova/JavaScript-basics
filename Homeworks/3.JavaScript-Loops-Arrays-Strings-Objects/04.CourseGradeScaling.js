var students = [
    {'name' : 'Пешо', 'score' : 91},
    {'name' : 'Лилия', 'score' : 290},
    {'name' : 'Алекс', 'score' : 343},
    {'name' : 'Габриела', 'score' : 400},
    {'name' : 'Жичка', 'score' : 70}
]

for (var obj in students) {
   students[obj].score += students[obj].score * (10/100);
}
for (var obj in students) {
    if (students[obj].score >= 100) {
        students[obj].hasPassed = true;
    }else{
        students[obj].hasPassed = false
    }
}

function pass(score){
    if (score.hasPassed){
        return true;
    }else{
        return false;
    }

}
function compare(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();

    return (a < b) ? -1 : (a > b) ? 1 : 0;
}
var passed = students.filter(pass);
passed = passed.sort(function(a,b){ return compare(a.name, b.name)});
console.log(passed);

