const fs = require('fs');
const process = require('process');

const createFile = (fileName, write) => {
    fs.writeFile(`${__dirname}/${fileName}`, `${write}`, (err) => {
        if (err) {

            console.log('No se pudo crear el archivo', err);
        } else {
            console.log('archivo creado exitosamente');
        }
    })
}
createFile(process.argv[2], process.argv[3]);