const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Configuration
mongoose
  .connect('mongodb://localhost:27017/datas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// Define routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/book'));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}`));
