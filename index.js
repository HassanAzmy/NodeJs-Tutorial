import fs from 'fs';

//* Types of Streams *//
/*
   * Readable  Stream => From which data can be read
   * Writable  Stream => To which we can write data
   * Dublex    Stream => That are both readable and writable
   * Transform Stream => that can modify or transform the data as its written or read
*/

const readeableStream = fs.createReadStream('./file1.txt', {
   encoding: "utf-8",
   highWaterMark: 2
});

const writableStream = fs.createWriteStream('./file2.txt');

//* It extends from EventEmitter
readeableStream.on('data', chunk => {
   console.log(chunk);
   writableStream.write(chunk);
});