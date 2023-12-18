const express = require('express');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const loggingMiddleware = require('./middleware/loggingMiddleware');
const app = express();

app.use(express.json());
// Applying logging middleware for all incoming requests
app.use(loggingMiddleware);


mongoose.connect("mongodb+srv://sonuk:kamble123@cluster0.vfrmzq9.mongodb.net/Blogpost-DB" )
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
