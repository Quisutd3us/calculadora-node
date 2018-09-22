const opts ={
    base: {
         demand: true,
         alias: 'b'
     },
     limite: {
         default: 10,
         alias: 'l'
     }
}

let argv = require('yargs')
    .command('listar', 'Imprime en Consola la tabla de multiplicar',opts)
    .command('guardar', 'Guarda en un achivo de texto la tabla de multiplicar', opts)
    .argv

module.exports = {
    argv
}