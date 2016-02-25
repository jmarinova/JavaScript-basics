var arr = [12, 3];

function calcCylinderVol (arr){
    var radius = arr[0];
    var height = arr[1];

    var result =  Math.PI*Math.pow(radius,2)*height;
    result = result.toFixed(3);
    console.log(result);
}

calcCylinderVol(arr);


