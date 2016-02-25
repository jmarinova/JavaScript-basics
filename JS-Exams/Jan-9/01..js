function solve(input){
    var basicConsumption = 10;
    var extrafuel = 0.01;
    var consumption = 0;
    for (var i in input) {
        var line = input[i].split(" ");

        if (line[1] === "gas"){
            consumption = basicConsumption * 1.2;
        }
        else if(line[1] === "diesel"){
            consumption = basicConsumption * 0.8;
        }
        var luggage = line[3];
        var lugCons = luggage * consumption;
        consumption += lugCons;
        var km = 0;
        var snowy =0;
        var road = line[2];
        if (road === "1"){
            km = 110;
            snowy = 10/100;
            consumption *=
        }
        else if (road === "2"){
            km = 95;
            snowy = 30/100;
        }

        console.log(line);
    }
}
solve(['BMW petrol 1 320.5',
        'Golf petrol 2 150.75',
        'Lada gas 1 202',
        'Mercedes diesel 2 312.54']
);