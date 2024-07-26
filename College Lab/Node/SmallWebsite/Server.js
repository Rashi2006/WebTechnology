const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    // res.write('<a href="Contacts">CONTACTS</a>');
    // res.write('<a href="home">HOME</a>');
    // res.write('<a href="About">ABOUT</a>');
    if(req.url=='/home'){
       console.log('Home page');
       let a= fs.readFileSync('./home.html');
       res.end(a);
    } else if (req.url == '/Contacts'){
       console.log('Contact page');
       let a= fs.readFileSync('./contacts.html');
        res.end(a);
    } else if (req.url == '/About') {
        console.log('About page');
        let a = fs.readFileSync('./About.html');
        res.end(a);
    }
    else{
        res.end("hii")
    }
});

server.listen(3000, () => {
    console.log("yes");
});