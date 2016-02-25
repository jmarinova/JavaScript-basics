function solve(input){
        var tennis = {};
        var name,
            matchesWon=0,
            matchesLost=0,
            setsWon=0,
            gamesWon=0,
            setsLost=0,
            gamesLost=0;

    for (var i = 0; i < input.length; i++) {
        var line = input[i].trim().split(/\s?:\s?/g);
        var players = line[0].trim().split(/\s?vs.\s?/g);
        var sets = line[1].trim().split(/\s+/g);
        var wins = 0;
        var losses = 0;

        nameBefore = players[0].trim().split(/\s+/g);
        name = nameBefore[0] + ' ' + nameBefore[1];
        if(!tennis[name]){
            tennis[name] = {
                'name' : name,
                'matchesWon' : 0,
                'matchesLost' : 0,
                'setsWon' : 0,
                'setsLost' :0,
                'gamesWon' : 0,
                'gamesLost' : 0
            };}
        for (var j = 0; j < sets.length; j++) {
            var currentSet = sets[j].split('-');
            gamesWon = Number(currentSet[0]);
            gamesLost = Number(currentSet[1]);
            if(gamesWon>gamesLost){
                tennis[name].setsWon += 1;
            }else{
                tennis[name].setsLost += 1;
            }
            tennis[name].gamesWon +=gamesWon;
            tennis[name].gamesLost += gamesLost;

        }

        if(tennis[name].setsWon > tennis[name].setsLost){
            tennis[name].matchesWon +=1;
        }else{
            tennis[name].matchesLost +=1;
        }

    }
    for (var i = 0; i < input.length; i++) {
         line = input[i].trim().split(/\s?:\s?/g);
         players = line[0].trim().split(/\s?vs.\s?/g);
         sets = line[1].trim().split(/\s+/g);
         wins = 0;
         losses = 0;

        nameBefore = players[1].trim().split(/\s+/g);
        name = nameBefore[0] + ' ' + nameBefore[1];
        if(!tennis[name]){
            tennis[name] = {
                'name' : name,
                'matchesWon' : 0,
                'matchesLost' : 0,
                'setsWon' : 0,
                'setsLost' :0,
                'gamesWon' : 0,
                'gamesLost' : 0
            };}
        for (var j = 0; j < sets.length; j++) {
            currentSet = sets[j].split('-');
            gamesWon = Number(currentSet[1]);
            gamesLost = Number(currentSet[0]);
            if(gamesWon>gamesLost){
                tennis[name].setsWon += 1;
            }else{
                tennis[name].setsLost += 1;
            }
            tennis[name].gamesWon +=gamesWon;
            tennis[name].gamesLost += gamesLost;

        }
        if(tennis[name].setsWon > tennis[name].setsLost){
            tennis[name].matchesWon +=1;
        }else{
            tennis[name].matchesLost +=1;
        }
    }


    var output = [];

    for (element in tennis) {
        output.push(tennis[element]);
    }
    output.sort(function(a,b){
        return parseInt(b.matchesWon) - parseInt(a.matchesWon) ||  parseInt(b.setsWon) - parseInt(a.setsWon) ||
         parseInt(b.gamesWon) - parseInt(a.gamesWon) || a.name.localeCompare(b.name);

    });

    console.log(JSON.stringify(output));

}
solve([
    'Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David Ferrer : 6-4 7-6',
    'Tomas Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre        			Agassi:2-1'
])