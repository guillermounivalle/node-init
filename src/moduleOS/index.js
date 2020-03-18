const os = require('os');



// os.platform nos retorna un string indicandonos 
//la plataforma del sistema operativo en el que se está
//ejecutando el programa

function os_functions(){
    console.log('Sistema operativo =====> ' + os.platform());
    console.log('Release =====> ' + os.release());
    console.log('free mem =====> ' + os.freemem());
    console.log('total mem =====> ' + os.totalmem());
}


exports.os_functions = os_functions;