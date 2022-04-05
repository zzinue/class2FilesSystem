const { CONNREFUSED } = require('dns');
const { create } = require('domain');
const fs = require('fs');

/* fs.writeFile(`${__dirname}/nuevoarchivo.txt`, 'Hola mundo nuevo archivo creado con node', (err) => {
    if (err) {

        console.log('No se pudo crear el archivo', err);
    } else {
        console.log('archivo creado exitosamente');
    }
})

fs.readFile(`${__dirname}/filesystem.txt`, (err, data) => {
    if (err) {
        console.log('hubo un error', err);
    } else {
        console.log(data.toString());
    }
}) */

/* fs.unlink(`${__dirname}/nuevoarchivo.txt`, (err) => {
    if (err) {
        console.log('No se pudo borrar el archivo', err);
    } else {
        console.log('archivo borrado exitosamente');
    }
}) */

/* fs.mkdir(`${__dirname}/nuevodirectorio`, (err) => {
    if (err) {
        console.log('No se pudo crear el directorio', err);
    } else {
        console.log(`directorio creado exitosamente`);
    }
}) */

//create a function to CRUD
/* const crud = (file, callback) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
    fs.writeFile(file, 'Hola mundo', (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    })
    fs.unlink(file, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    })
    fs.mkdir(file, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    })
} */

//1.- Create a folrder named zzinueDirectory
//2.- Create a file in it named zzinueFile.txt
//3.- Add more data into the file at the end of the existing data
//4.- Read the data without gettinh the buffer data at first.
//5.- Rename the file name zzinueUpdatedFile.txt
//6.- now delete both the file and the folder