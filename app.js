const express = require('express');
const ejs = require('ejs')
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const PORT = process.env.PORT ||8080;

// setting up view engine 
app.set("view engines", "ejs");
app.set("views", "./views");

//using express.Router()to organize route
app.use(userRoutes);

//serve the static files 
app.use(express.static('public'));


//this will start our server
app.listen(PORT, () =>{
    console.log(`Connected to port ${PORT}`);
});