const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
  res.send('<h1>hello, world rvffervre<h1>')
})

require('./startup/routes')(app);


app.listen(port, () => {
  console.log(`express app is online and serving on port: ${port}`)
})
