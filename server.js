// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/database')
const cors = require('cors');
const morgan = require('morgan')
const userSchema = require('./models/user');
const user = require('./models/user');
require('dotenv').config();

const app = express();
const port = process.env.port 

// Middleware
app.use(bodyParser.json())
app.use(cors());
app.use(morgan('dev'))
// establishing DB connection
connectDb()

app.use('/user' ,userSchema )

app.get('/' , (req , res) => {
  res.send('working')
})

app.post('/form' , async (req , res) => {
  try {
    res.json(await user.create(req.body))
  } catch (err) {
    res.status(400).json(error)
  }
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });