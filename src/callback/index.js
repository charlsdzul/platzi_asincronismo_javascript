//***************  EJEMPLO 1

function suma(n1,n2){
    return n1 + n2;
}

function calc(num1,num2, callback){
return callback(num1,num2);
}

console.log(calc(2,2,suma))

//***************  EJEMPLO 2

// función principal
function date(callback){

    console.log(new Date);

    setTimeout(function(){
        let date = new Date;
        callback(date)
    }, 3000)

    console.log(new Date);
}

// callback...
function printDate(dateNow){
    console.log(dateNow)
}

date(printDate);