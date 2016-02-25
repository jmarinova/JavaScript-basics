
function solve(input){
        var type, number,
            gold = 0,
            silver = 0,
            coins = 0;


    for (var i = 0; i < input.length; i++) {
        var line = input[i].trim().split(/\s+/g);
        type = line[0].trim().toLowerCase();
        number = Number(line[1]);


        if(type==='coin' || type === 'coins'){
            if(number === parseInt(number,10) && number > 0 && number < 100000){
                coins +=number;
                while(coins>=100){
                    gold+=1;
                    coins -=100;
                }
                while(coins>=10){
                    silver +=1;
                    coins -=10;
                }
            }
        }
    }
    console.log('gold : ' + gold+'\n'+'silver : '+ silver+'\n'+'bronze : '+coins);
}


solve(['cOin 1',
    'Coin 2',
    'coiN 45',
    'coin 100',
    'coIn 29',
    'coin 545',
    'coin hundred',
    'cigars 1']);