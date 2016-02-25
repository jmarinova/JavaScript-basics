function solve(args){
    var matrix = [],
        resultMatrix = [],
        resultArray = [];

    var char,
        isX,
        i;

    for (i in args) {
        matrix.push(args[i].toLowerCase().split(''));
        resultMatrix.push(args[i].split(''));
    }

    for (var row = 0; row < matrix.length-2; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            char = matrix[row][col];
            isX = matrix[row + 1][col -1] == char &&
                matrix[row + 1][col] == char &&
                matrix[row + 1][col + 1] == char &&
                matrix[row + 2][col] == char;


            if  (isX){
                resultMatrix[row][col] = ' ';
                resultMatrix[row + 1][col -1] = ' ';
                resultMatrix[row + 1][col] = ' ';
                resultMatrix[row + 1][col + 1] = ' ';
                resultMatrix[row + 2][col] = ' ';
            }
        }        
    }
    for (var obj1 in resultMatrix) {
            resultArray.push(resultMatrix[obj1].join('').split(' ').join(''));
    }
    for (var obj in resultArray) {
        console.log(resultArray[obj]);
    }
}

solve(
    ['@s@a@p@una',
     'p@@@@@@@@dna',
     '@6@t@*@*ego',
     'vdig*****ne6',
     'li??^*^*']
);