const fs = require('fs');
var colors = require('colors');


let data = '';

let consolaTabla= (base, limite) =>{
    console.log(`
    -------------------------------------------------
    -------------------TABLA DEL ${base}------------------
    -------------------------------------------------
    `.green);
    data = ''
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base *i}\n`.america
    }
    return new Promise((resolve, reject)=>{
        if (!data) {
            reject(`Error calculando los datos`)
        } else {
            resolve(data)
        }
    })
}

let calcularTabla = (base,limite) => {
    data = ''
     for (let i = 0; i <= limite; i++) {
          data += `${base} * ${i} = ${i * base}\n`;
     }
     console.log(data);
     return new Promise((resolve, reject) => {
          if (!data) {
               reject(`Error calculando los datos`)
          } else {
               resolve(data)
          }
     })
}

let crearArchivo = async (base, limite) => {
     let resultadoTabla = await calcularTabla(base, limite)
     return new Promise((resolve, reject) => {
          fs.writeFile(`archivos/tabla-${base}`, resultadoTabla, (err) => {
               if (err) reject(`hubo un error`);
               resolve(`tabla-${base}.txt creada con exito`.bgBlue.white.bold);
          });
     })
}

module.exports = {
     crearArchivo, consolaTabla
}