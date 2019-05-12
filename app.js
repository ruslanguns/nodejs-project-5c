const path = require('path');
const rootDir = require('./util/path');
const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use(homeRouter);

app.use((res, req, next) => {
    req.status(404).sendFile(path.join(rootDir, 'views', 'error', '404.html'));
});

app.listen(4000);