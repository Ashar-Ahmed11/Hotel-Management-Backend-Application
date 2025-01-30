const mongoose = require('mongoose')


const { Schema } = mongoose;

const coverSchema = new Schema({
    assets:[
            {url:{
                type:'String'
            }}
    ]
    
});

module.exports = mongoose.model('coverimgs', coverSchema)