const http = require('http');
const fs = require('fs');
var url = require('url');


// create server
http.createServer((req, res) => {
  let path = req.url
  if (path === "/" ){
    path = "home"
  } else if (path !== "about" || path !== "/contact"){
    path = "404"
  }
  fs.readFile(`/Users/Desi/Desktop/OdinProject/Fullstack-Javascript/first-node-project/pages/${path}.html`, function(err, data) {
    if (err) {
        return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

for (let code in codes) {
  console.log( code ); // 49, 41, 44, 1
}
