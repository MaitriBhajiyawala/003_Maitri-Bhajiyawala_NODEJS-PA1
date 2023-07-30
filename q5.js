const fs = require('fs');
const archiver = require('archiver');

const folderPath = './q1';
const outputPath = './q1.zip';

const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', {
  zlib: { level: 9 } // Set the compression level (0-9) as needed
});



archive.pipe(output);

archive.directory(folderPath, false); // The second argument (false) prevents the root folder from being included in the archive.

archive.finalize();
