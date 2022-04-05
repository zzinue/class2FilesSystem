const fs = require('fs');
const process = require('process');

const readFile = (nameFile) => {
    fs.readFile(`${__dirname}/${nameFile}`, (err, data) => {
        if (err) {
            console.log('an error ocurred', err);
        } else {
            console.log(data.toString());
        }
    })
}
readFile(process.argv[2], process.argv[3]);