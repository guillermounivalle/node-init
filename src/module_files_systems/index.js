
//Modulo que nos permite interactuar con los archivos del sistea operativo
const fs = require('fs');


//Creando un nuevo archivo
//          Nombre archivo,  Lo que va dentro del archivo
fs.writeFile('./texto.txt', 'Hola mundo', function(err){
    if(err){
        console.log("error ====> " + err);
    }
    console.log("Archivo creado");
});

//Leyendo el archivo

fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log("error ====> " + err);
    }
    console.log("Data =======> " + data);
});

module.exports = fs;
