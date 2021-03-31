const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Mongoose connection success");
});

// Server connection
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});