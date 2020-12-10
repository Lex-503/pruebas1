// requires
const colors = require('colors');

const fs = require('fs');
const argv = require('yargs').command('ayuda', 'Muestra en consola la propiedad ingresada', {
    message: {
        demand: true,
        alias: 'm'
    }
}).argv;

const argv2 = require('yargs').command('muestra', false, {
    texto: {
        demand: true,
        alias: 't'
    }
}).argv;

const sumar = require('yargs').command('sumar', 'Suma dos numeros', {
    base: {
        demand: true,
        alias: 'b'
    },
    operador: {
        alias: 'o',
        default: 20
    }
}).help().argv;
/* const fs = require('fs');
const fs = require('fs'); */

/* fs.writeFile('tabla-2.txt', 'Hola Mundo', (err) => {
    if (err) throw err;
    console.log('El Archivo ha sido creado exitosamente');
}); */

/* let parametro = process.argv[2];
let base = parametro.split('='); */
/* 
console.log(module);
console.log(process.argv); */

console.log(sumar.base + sumar.operador);
console.log('Probando Colors'.green);