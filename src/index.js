
const math_functions = require('./mathfunctions/index');
const module_os = require('./moduleOS/index');
const fs = require('./module_files_systems/index');

function main(){
    console.log ("===>   main ");
    console.log ("suma ===> "+ math_functions.add(5,2));
    console.log ("Resta ===> "+ math_functions.substract(5,2));
    console.log ("Multiplicación ===> "+ math_functions.multipay(5,2));
    console.log ("División ===> "+ math_functions.divide(6,2));
    console.log ("División ===> "+ math_functions.divide(6,0));
    console.log(math_functions);

    module_os.os_functions();
  }
  
  main();