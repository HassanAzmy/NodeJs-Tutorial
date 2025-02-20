import { log } from 'console';
import htpp from 'http';

//* It's prefered to specify the content type
const server = htpp.createServer((req, res) => {
   res.writeHead(200, {
      "content-type": 'text/plain'
   });
   res.end('Hello world!');
});

server.listen(3000, () => {
   console.log('Server is running on port 3000');
});