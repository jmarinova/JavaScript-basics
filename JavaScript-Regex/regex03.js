function solve(input) {

    var result = input.match(/([A-Z][a-z\.]+\s??){3}/g);
    console.log(JSON.stringify(result));

}
solve("vcrvr Iliqn Iliqnov Jr. bckjsdbc jndskjcnds");