const express = require('express');
const route = require('./route/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://user2023:test5299@ac-5sqaj3u-shard-00-00.vfrmzq9.mongodb.net/Blogpost-DB" )
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
