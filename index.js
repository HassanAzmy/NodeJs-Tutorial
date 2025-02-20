import { log } from 'console';
import htpp from 'http';
import fs from 'fs';
const __dirname = import.meta.dirname;

//* (req, res) => {} is a request listener
const server = htpp.createServer((req, res) => {
   const superHero = {
      firstName: 'Hassan',
      lasttName: 'Azmy',
   };

   res.writeHead(200, {
      "content-type": 'text/html'
   });

   fs.createReadStream(__dirname + "/index.html").pipe(res);
});

server.listen(3000, () => {
   console.log('Server is running on port 3000');
});