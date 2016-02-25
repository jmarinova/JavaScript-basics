function solve(input){
    var directions = input[0].split(', ');

    var printString = '';
    var matrix =[];

    var curRow = 0,
        curCol = 0;
        var figures = {
            '&':0,
            '*':0,
            '#':0,
            '!':0,
            'wall hits':0
        };

    for (var i = 1; i < input.length; i++) {
        matrix.push(input[i].split(', '));
    }

    function move(dX, dY, X, Y){

        var veggie = matrix[dX+X][dY+Y];

        if(veggie != undefined) {
            if(veggie.contains('{!}')){
                figures['!']++;
                X += dX;
                Y += dY;
                matrix[X][Y] = '@';
                printString += matrix[X][Y] + '|';
            }
            if(veggie.contains('{*}')){
                figures['*']++;
                X += dX;
                Y += dY;
                matrix[X][Y] = '@';
                printString += matrix[X][Y] + '|';
            }
            if(veggie.contains('{&}')) {
                figures['&']++;
                X += dX;
                Y += dY;
                matrix[X][Y] = '@';
                printString += matrix[X][Y] + '|';
            }
                if(veggie.contains('{#}')){
                    figures['#']++;
                    X += dX;
                    Y += dY;
                    matrix[X][Y] = '@';
                    printString += matrix[X][Y] + '|';
                }




        }else{
            figures['wall hits']++;
        }
    }

    for (var i = 0; i < directions.length; i++) {
        var jump = directions[i];
        switch (jump) {
            case 'right':
                move(0, 1, curRow, curCol);
                break;
            case'up':
                move(-1, 0, curRow, curCol);
                break;
            case 'left':
                move(0, -1, curRow, curCol);
                break;
            case 'down':
                move(1, 0, curRow, curCol);
                break;
        }
    }
    console.log(JSON.stringify(figures));
    var result = printString.slice(0,printString.length-1);
    console.log(result);
}

solve(
    [   'right, up, up, down',
        'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
        'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
        'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'
    ]
)