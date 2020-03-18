
const math_functions = {};

//Suma
function add (x1, x2){
    return x1 + x2;
}


//substract
function substract (x1, x2){
    return x1 - x2;
}

//Multiplicación
function multipay (x1, x2){
    return x1 * x2;
}


//División
function divide (x1, x2){
    if(x2 == 0){
       return console.log ("No se puede dividir por cero");
    }
    else{
        return x1 / x2;
    }
}

/*   Exportando las funciones de manera individual

exports.add = add;
exports.substract = substract;
exports.multipay = multipay;
exports.divide = divide;
*/

//Exportando las funciones dentro de un objeto 

math_functions.add = add;
math_functions.substract = substract;
math_functions.multipay = multipay;
math_functions.divide = divide;

module.exports = math_functions;

