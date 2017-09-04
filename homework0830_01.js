function random(m){
    var num;
    num = Math.floor(Math.random()*m+1);
    return num;
}

function max(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

function lastChar(str){
    var index = str[str.length - 1];
    return index;
}


function squares(a,b){
    return Math.pow(a,2) + Math.pow(b,2);
}

function leapYear(y){
    if (y % 400 === 0){
        return "Yes";
    }
    else if ((y % 4 === 0) && (y % 100 != 0)){
        return "Yes";
    }
    else{
        return "No";
    }
}

//var yy = y%100 != 0 || y%400 === 0;
//if(y%4===0 && (y%100!=0 || y%400===0)){
//    return "Yes";
//}
//else{
//    reture "No";
//}