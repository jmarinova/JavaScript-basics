function solve(args){
    var matrix = [],
        newMatrix = [],
        i,
        char,
        exist,
        resultArray =[];

    for (i in args) {
        matrix.push(args[i].toLowerCase().split(''));
        newMatrix.push(args[i].split(''));
    }

    for (var row = 0; row < matrix.length-2; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            char = matrix[row][col];

            exist = matrix[row][col +2] == char &&
                    matrix[row+1][col+1] == char &&
                    matrix[row +2][col] == char &&
                    matrix[row+2][col+2] == char;

            if (exist){
                newMatrix[row][col] =' ';
                newMatrix[row][col+2] = ' ';
                newMatrix[row+1][col+1] = ' ';
                newMatrix[row +2][col] =' ';
                newMatrix[row+2][col+2] = ' ';
            }
        }
    }

    for (var obj in newMatrix) {
        resultArray.push(newMatrix[obj].join('').split(" ").join(''));
    }
    for (var obj1 in resultArray) {
        console.log(resultArray[obj1]);
    }
}

solve([
    'puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'
])