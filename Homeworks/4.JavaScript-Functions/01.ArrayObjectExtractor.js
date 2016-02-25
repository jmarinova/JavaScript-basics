
var array = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]


function extractObjects(array){
    for (var obj in array) {
        if (typeof obj !== 'undefined'){
            var newArray = newArray.push(obj);
        }
    }
    console.log(newArray);
}