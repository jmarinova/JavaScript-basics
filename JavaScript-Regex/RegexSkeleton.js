function solve(input) {

    var result = input.match(/([a-z\-\_0-9]){3,15}/g);
    console.log(JSON.stringify(result));

}
solve("user 0n3  %$%^");
