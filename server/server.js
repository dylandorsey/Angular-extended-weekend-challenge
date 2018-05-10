// Require node packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Require routes
const entryRouter = require('./routes/entry.router');
const projectRouter = require('./routes/project.router');

// PORT
const PORT = process.env.PORT || 5000;

// Use
app.use(bodyParser.json());
app.use(express.static('server/public'));

// Use routes
app.use('/entry', entryRouter);
app.use('/project', projectRouter);

// Set app to listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

