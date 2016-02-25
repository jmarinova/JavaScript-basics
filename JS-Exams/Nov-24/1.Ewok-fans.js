function solve(args){
    var line,
        i,
        result,
        date,
        haters = [],
        fans = [];

    var ewokeDate = new Date(1973,05-1,25);
    var startDate = new Date(1900,01-1,01);
    var endDate = new Date(2015, 01-1, 01);

    for (i in args) {
        line = args[i].split('.');
        date = new Date(line[2],line[1]-1,line[0]);

        if  (date > startDate && date < endDate) {

            if (date < ewokeDate) {
                haters.push(date);
            }else{
                fans.push(date);
            }
        }
    }

    if  (!fans.length && !haters.length){
        console.log('No result')
    }else{
        haters.sort(function(a,b){
            return a.getTime()- b.getTime();
        });
        fans.sort(function(a,b){
            return a.getTime()- b.getTime();
        });
        if  (!fans.length){
            console.log('The biggest hater of ewoks was born on ' + haters[0].toDateString());

        }
        else if(!haters.length){
            console.log('The biggest fan of ewoks was born on ' + fans[fans.length-1].toDateString());

        }else{
            console.log('The biggest fan of ewoks was born on ' + fans[fans.length-1].toDateString());
            console.log('The biggest hater of ewoks was born on ' + haters[0].toDateString());
        }
    }
}

solve([
    '22.03.2014',
    '22.03.2000'

]);