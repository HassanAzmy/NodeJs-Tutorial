import { log } from 'console';
import htpp from 'http';

//* (req, res) => {} is a request listener
const server = htpp.createServer((req, res) => {
   const superHero = {
      firstName: 'Hassan',
      lasttName: 'Azmy',
   };

   res.writeHead(200, {
      "content-type": 'text/html'
   });
   res.end("<h1>Hello, world</h1>");
});

server.listen(3000, () => {
   console.log('Server is running on port 3000');
});