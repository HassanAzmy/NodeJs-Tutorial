import htpp from 'http';

//* (req, res) => {} is a request listener
const server = htpp.createServer((req, res) => {
   if(req.url === '/') {
      res.writeHead(200, {"content-type": 'text/plain'});
      res.end('Home page');
   } else if(req.url === '/about') {
      res.writeHead(200, {"content-type": 'text/plain'});
      res.end('About page');
   } else if(req.url === '/api') {
      res.writeHead(200, {"content-type": 'application/json'});
      res.end(JSON.stringify({
         firstName: 'Hassan',
         lastName: 'Azmy'
      }));
   }
});

server.listen(3000, () => {
   console.log('Server is running on port 3000');
});