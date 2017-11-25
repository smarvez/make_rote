const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api', (req, res, next) => {
  res.send({message: "Hello from the API!"});
})

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({error: err});
})

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
