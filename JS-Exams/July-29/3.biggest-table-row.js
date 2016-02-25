function solve(input){
    var biggestSum = -Infinity,
        bigString = "";

    for (var i = 2; i < input.length; i++) {
        var line = input[i].match(/\-?[\d\.]+/g);
        var sum =  0;
        //\-?[\d\.]+
        //(\-?\d+\.?)+

        if(line != undefined){
            for (var obj in line) {
                sum += Number(line[obj]);
            }
            if(sum>biggestSum){
                //65.3 = 11.2 + 18.00 + 36.10
                biggestSum = sum;
                bigString = sum + ' =';

                for (var k = 0; k < line.length; k++) {
                    bigString += ' ' + line[k] + ' +'
                }
            }
        }
    }

    if (bigString === ""){
        console.log('no data');
    }else{
        console.log(bigString.slice(0,bigString.length-2));
    }
}
solve([
'<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>0</td><td>-</td><td>-</td></tr>',
'</table>'
]);