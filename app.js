const express = require('express');
const path = require('node:path');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config();

const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Express app listenning on port ${PORT}!`);
});
