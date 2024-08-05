const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/about', (req, res) => {
    let fs = require('fs');
    let read=fs.readFileSync('./About.txt'); 
    console.log(read.toString());   
    res.send(read.toString());
});

app.get('/contact', (req, res) => {
    let fs = require('fs');
    let read=fs.readFileSync('./Contact.txt');
    
    res.send(read.toString());
});

app.listen(4646, () => {
    console.log('Server is running on port 3000');
});