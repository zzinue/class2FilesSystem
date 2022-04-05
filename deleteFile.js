const fs = require('fs');
const process = require('process');

const deleteFile = (nameFile) => {
    fs.unlink(`${__dirname}/${nameFile}`, (err) => {
        if (err) {
            console.log('it cannot be deleted', err);
        } else {
            console.log('file deleted successfully');
        }
    })
}
deleteFile(process.argv[2], process.argv[3]);