function solve(input) {
    var line,
        numbers,
        team,//alphabetical
        scored,
        goals,
        conceded,
        opponent;

        //opponents - alphabetical, NO REPEAT
    var table = {};

    for (var i = 0; i < input.length; i++) {
        line = input[i].match(/([A-Za-z]+\s?\w+)/g);
        goals = input[i].match(/([0-9]+)/g);
        team = line[0];
        opponent = line[1];
        scored = Number(goals[0]);
        conceded = Number(goals[1]);
        if(!table[team]){
            table[team] = {
                'goalsScored':0,
                'goalsConceded':0,
                'matchesPlayedWith': []
            };
            table[team].goalsScored +=scored;
            table[team].goalsConceded +=conceded;
            table[team].matchesPlayedWith.push(opponent);
        }else{
            table[team].goalsScored +=scored;
            table[team].goalsConceded +=conceded;

            if(table[team].matchesPlayedWith.indexOf(opponent) == -1){
                table[team].matchesPlayedWith.push(opponent);
            }

        }
    }
    for (var i = 0; i < input.length; i++) {
        line = input[i].match(/([A-Za-z]+\s?\w+)/g);
        team = line[1];
        opponent = line[0];
        goals = input[i].match(/([0-9]+)/g);
        scored = Number(goals[1]);
        conceded = Number(goals[0]);
        if(!table[team]){
            table[team] = {
                'goalsScored':0,
                'goalsConceded':0,
                'matchesPlayedWith': []
            };
            table[team].goalsScored +=scored;
            table[team].goalsConceded +=conceded;
            table[team].matchesPlayedWith.push(opponent);
        }else{
            table[team].goalsScored +=scored;
            table[team].goalsConceded +=conceded;
            if(table[team].matchesPlayedWith.indexOf(opponent) == -1){
                table[team].matchesPlayedWith.push(opponent);
            }
        }
    }

    var countries = Object.keys(table).sort();
    var output = {};
    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        output[country] = table [country];
        output[country].matchesPlayedWith.sort();
    }
    console.log(JSON.stringify(output));
}



solve([
    'Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'
]);