var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
const cors = require('cors')


var app = express();


// Login and Register 
require('./auth/auth');
const login = require('./routes/login')
// ----------------------------------------------------

const bookingRoute = require('./routes/routeSelection')

var registerRouter = require('./routes/register');
//--------------------------------------------------------


//DB Config
const DB_URL = require('./config/keys').MongoURI;

//connect to mongo
//---------------------------------------------
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        throw err
    });
//---------------------------------------------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', login);
app.use('/booking', bookingRoute);
app.use('/register', registerRouter);  // To register page 
// app.use('/user', passport.authenticate('jwt', { session: false }), loggedInPage); //To Secure Route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));