const http= require('http');

const server=http.createServer((req, res) => {
    if(req.url=='/about'){
        res.end("About");
    }else if(req.url=='/contacts'){
        res.end("contacts");
    }else{
        res.end("Rashi");
    }
    
});
const port= 1404;
server.listen(port , ()=>{
    console.log('Server listening on port');
});