// modules =================================================
const express = require('express');
const app = express();
// set our port
const port = 3000;
app.get('/', (req, res) => res.send('This is abhinav\'s first node application'));

//defining route
app.get('/tproute', function (req, res) {
res.send('This is routing for the application developed using Node and Express')
});

// startup our app at http://localhost:3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
// Add Bootstrap
app.use(express.static(__dirname + '/public'));
// expose app
exports = module.exports = app;
