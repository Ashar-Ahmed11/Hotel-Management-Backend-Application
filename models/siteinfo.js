const mongoose = require('mongoose')


const { Schema } = mongoose;

const siteSchema = new Schema({
    title: {
        type: 'String',
    },
    description:{
        type:'String'
    },
    email:{
        type:'String'
    },
    about:{
        type:'String'
    },
    phone:{
        type:'String'
    }
    
});

module.exports = mongoose.model('siteinfo', siteSchema)