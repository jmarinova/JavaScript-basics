function solve(input){
    var coins = 0;
    for (var item in input) {
        var current = input[item].trim().split(" ");
        var name = current[0].toLowerCase();

        if (current[1] % 1 !== 0) { continue; }

        var amount = parseInt(current[1]);
        if ((name === "coin" || name === "coins") && (amount > 0 )){
            coins +=amount;
        }
    }
    var gold = parseInt((coins / 100));
    var silver = parseInt((coins % 100) / 10 );
    var bronze = coins % 10;
    console.log("gold : " + gold);
    console.log("silver : " + silver);
    console.log("bronze : " + bronze);
}
solve(['coins 1','coin 2.2', 'coin 5', 'coin 0', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1']);