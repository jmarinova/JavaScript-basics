function solve(args){
    var i,
        line,
        carModel,
        fuelType,
        road,
        luggageWeigh,
        fuelConsumption,
        total;


    for (i in args) {
        line = args[i].split(' ');
        carModel = line[0];
        fuelType = line[1];
        road = Number(line[2]);
        luggageWeigh = line[3];

        fuelConsumption = 10/100;
        switch (fuelType){
            case 'gas':
                fuelConsumption *=1.2;
                break;
            case 'diesel':
                fuelConsumption *=0.8;
                break;
            case 'petrol':
            default:
                break;
        }
        fuelConsumption += luggageWeigh*0.1;


        if (road == 1){
            total = fuelConsumption * 110;
            total += 10 * fuelConsumption * 0,3;
        }

    }

}
solve([
        'BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54'
    ]);