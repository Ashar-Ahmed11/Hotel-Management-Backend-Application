const mongoose = require('mongoose')

const URI = 'mongodb+srv://metatech674:helloworld22@cluster0.qb31q.mongodb.net/'

const connectToMongo = () => mongoose.connect(URI, () => {
    console.log("Connected to Mongo Successfully")
})

module.exports = connectToMongo