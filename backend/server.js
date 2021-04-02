require('dotenv').config({path:'../.env'});
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose connection success");
});

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/user');
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

// Server connection
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
