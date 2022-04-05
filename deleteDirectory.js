const fs = require('fs');
const process = require('process');

const deleteDirectory = (nameDirectory) => {
    fs.rmdir(`${__dirname}/${nameDirectory}`, (err) => {
        if (err) {
            console.log('directory cannot be deleted', err);
        } else {
            console.log('directory deleted successfully');
        }
    })
}
deleteDirectory(process.argv[2], process.argv[3]);