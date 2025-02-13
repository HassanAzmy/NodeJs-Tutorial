import fs from 'fs';

const readeableStream = fs.createReadStream('./file1.txt', {
   encoding: "utf-8",
   highWaterMark: 2
});

const writableStream = fs.createWriteStream('./file2.txt');

readeableStream.on('data', chunk => {
   console.log(chunk);
   writableStream.write(chunk);
});