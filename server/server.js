// Require node packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Require routes
// const taskRouter = require('./routes/tasks.router');
// const projectRouter = require('./routes/projects.router');

// PORT
const PORT = process.env.PORT || 5000;

// Use
app.use(bodyParser.json());
app.use(express.static('server/public'));

// Use routes
// app.use('/tasks', taskRouter);
// app.use('/projects', projectRouter);

// Set app to listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

