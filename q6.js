const fs = require('fs');
const unzipper = require('unzipper');

const zipFilePath = './q1.zip';
const outputFolder = 'q1_zip';

fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: outputFolder }))
  .on('close', function () {
    console.log('Folder decompressed:', outputFolder);
  });
