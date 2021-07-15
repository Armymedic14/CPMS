const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

//for ignore files (secret codes)
dotenv.config();

//server setup
const app = express();
const port = process.env.PORT || 5000;

//allows you to see that server is properly running in the terminal
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: ['http://localhost:3000'],
              credentials: true
}));

//connect to the database (MongoDB)
const connect = process.env.connectionString;
mongoose.connect(connect, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//route naming variables
const authorRouter = require('./routes/authorRouter');
const paperRouter = require('./routes/paperRouter');
const reviewerRouter = require('./routes/reviewerRouter');
const reviewRouter = require('./routes/reviewRouter');

//routes
app.use('/author', authorRouter);
app.use('/paper', paperRouter);
app.use('/reviewer', reviewerRouter);
app.use('/review', reviewRouter);
