const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


mongoose.connect(
    "mongodb://designa:designa123@cluster0-shard-00-00-ouzug.mongodb.net:27017,cluster0-shard-00-01-ouzug.mongodb.net:27017,cluster0-shard-00-02-ouzug.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", () =>
{
    useNewUrlParser: true
});
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

app.listen(process.env.PORT || 3000,() =>{
    console.log(':) Server Started on port 3000');
})