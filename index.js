import { log } from 'console';
import htpp from 'http';
import fs from 'fs';

//* (req, res) => {} is a request listener
const server = htpp.createServer((req, res) => {
   const superHero = {
      firstName: 'Hassan',
      lasttName: 'Azmy',
   };

   const html = fs.readFileSync("./index.html", "utf-8");

   res.writeHead(200, {
      "content-type": 'text/html'
   });
   
   res.end(html);
});

server.listen(3000, () => {
   console.log('Server is running on port 3000');
});