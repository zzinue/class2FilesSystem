const fs = require('fs');
const process = require('process');

const createDirectory = (nameDirectory) => {
    fs.mkdir(`${nameDirectory}`, (err) => {
        if (err) {
            console.log('directory was not created', err);
        } else {
            console.log(`directory created successfully`);
        }
    })
}
createDirectory(process.argv[2], process.argv[3]);