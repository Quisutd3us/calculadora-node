let argv = require('./config/yargs').argv
let {
    crearArchivo,
    consolaTabla
} = require('./bin/multiplicar')

// tst

let base = argv.base
let limite = argv.limite

switch (argv._[0]) {
    case 'listar':
        consolaTabla(base, limite)
            .then(archivo => {
                console.log(archivo);
            })
            .catch(err => {
                console.log(err);
            })
        break;
    case 'guardar':
        crearArchivo(base, limite)
            .then(archivo => {
                console.log(archivo);
            })
            .catch(err => {
                console.log(err);
            })
        break;
        case undefined:
        console.log('Ingrese  node app.js --help para +Info');
        break;
    default:
        break;
}



