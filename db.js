const mongoose = require('mongoose');
const DB = 'mongodb+srv://altamashaseer:aseer$$$123@cluster0.kgfvrbl.mongodb.net/?retryWrites=true&w=majority'

// const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo = () => {
    mongoose.connect(DB).then(() => {
        console.log("connected to Mongo Atlas")
    }).catch((err) => console.log('Connection unsuccessful'))
}

module.exports = connectToMongo;