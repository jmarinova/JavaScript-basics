function solve(input) {

    var result = input.match(/(href=")+([a-zA-Z\.\/\W\d]).*?(\")/g);
    console.log(JSON.stringify(result));

}
solve("");