function solve(args){
    var matrix = [], el, char;

    for (el in args) {
        matrix.push(args[el].split(''));
    }

    for (var row = 0; row < matrix.length-3; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            char = 'o';
            var i = matrix[row][col] == char &&
                    matrix[row + 1][col] == char &&
                    matrix[row + 2][col] == char &&
                    matrix[row + 3][col] == char;

            var l = matrix[row][col] == char &&
                matrix[row + 1][col] == char &&
                matrix[row + 2][col] == char &&
                matrix[row + 2][col + 1] == char;

            var j = matrix[row][col + 1] == char &&
                matrix[row + 1][col + 1] == char &&
                matrix[row + 2][col + 1] == char &&
                matrix[row + 2][col-1] == char;

            var o = matrix[row][col] == char &&
                matrix[row][col + 1] == char &&
                matrix[row + 1][col] == char &&
                matrix[row + 1][col + 1] == char;

            var z = matrix[row][col] == char &&
                matrix[row][col + 1] == char &&
                matrix[row + 1][col + 1] == char &&
                matrix[row + 1][col + 2] == char;

            var s = matrix[row][col+1] == char &&
                matrix[row][col + 2] == char &&
                matrix[row + 1][col] == char &&
                matrix[row + 1][col + 1] == char;
        }
    }
}
solve([
    '--o--o-',
    '--oo-oo',
    'ooo-oo-',
    '-ooooo-',
    '---oo--'
])