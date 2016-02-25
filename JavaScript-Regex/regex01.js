function solve(input) {

    var result = input.match(/([A-Za-z0-9\-\_\.])+@([A-Za-z0-9])+([\.a-zA-Z]){2,}/g);
    console.log(JSON.stringify(result));

}
solve("meil SLO4AENOS.NeMisLA@Eliomenad.com mail");