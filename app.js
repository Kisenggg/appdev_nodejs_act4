const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Miss U, ${name}!`);
});

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});