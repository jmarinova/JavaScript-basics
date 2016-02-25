function sortLetters(str,bool){
    if (bool){
        str = str.split("");
        str = str.sort(
            function(a, b) {
                if (a.toLowerCase() < b.toLowerCase()) return -1;
                if (a.toLowerCase() > b.toLowerCase()) return 1;
                return 0;
            }
        );
        str = str.join("");
        console.log(str);
    }else{
        str = str.split("")
        str = str.sort(function(a,b) {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if( a == b) return 0;
            return a < b ? -1 : 1;
        });
        str = str.join('');
        console.log(str);
    }
}

sortLetters('HelloWorld', false);