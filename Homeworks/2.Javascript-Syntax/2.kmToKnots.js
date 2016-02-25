var km =400;

function convertKM(km){
    return km/1.852;
}
var knots = convertKM(km);
console.log(Math.round(knots * 100) / 100);