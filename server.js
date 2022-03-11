const http = require('http');

const { readFileSync } = require('fs');

const homePage = readFileSync('./index.html');
const homeStyles= readFileSync('./styles.css');
const homeScripts = readFileSync('./scripts.js');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage)
        res.end();
    }

    else if(url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});
        res.write(homeStyles)
        res.end();

    }

    else if(url === '/scripts.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(homeScripts)
        res.end();

    }
});

server.listen(7612);