function multiplicar(){
    var number = window.prompt("Introdueix el numero: ");
        if (isNaN(number)){
            console.log("not a number");
        }else{
        for (let i= 0; i<11; i++){
            var result = number*i;
            console.log(number.concat("x").concat(i).concat("=").concat(result));
        }
    }
}

