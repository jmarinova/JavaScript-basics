var checkBox = document.getElementById('check');
var divToShow;

divToShow = document.getElementById('divToShow');
console.log(divToShow);

checkBox.addEventListener('click', function (ev) {
    if (this.checked){
        divToShow.style.display = 'block';
    }else {
        divToShow.style.display = 'none';
    }
})


/*

document.getElementById('check').onclick = function(){
    toggle(this, 'divToShow');
}

function toggle(box, id){
    var element = document.getElementById(id);

    if (box.checked){
        element.style.display = 'block';
    }else{
        element.style.display = 'none';
    }
}*/
