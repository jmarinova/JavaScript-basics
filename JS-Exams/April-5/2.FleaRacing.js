function solve(input){
    var length = Number(input[1]);
    var position = Number(input[0]);

    var matrix = [];
    var rows = input.length-2;

    for (var i = 0; i < rows; i++) {
        matrix[i] = [];
        for (var j = 0; j < length; j++) {
            matrix[i][j] = ".";
        }

    }
    console.log(matrix);
}

solve(['10','19','angel, 9','Boris, 10','Georgi, 3','Dimitar, 7']);