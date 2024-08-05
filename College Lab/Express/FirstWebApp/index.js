const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Index page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.send('contact page');
});

app.listen(4545, () => {
    console.log('Server is running on port 3000');
});

