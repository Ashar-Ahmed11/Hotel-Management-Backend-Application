const mongoose = require('mongoose')


const { Schema } = mongoose;

const roomsSchema = new Schema({
    name: {
        type: 'String',
    },
    description01:{
        type:'String'
    },
    description02:{
        type:'String'
    },
    assets:[
            {url:{
                type:'String'
            }}
    ],
    services:[
        {
            type:"String"
        }
    ]
    
});

module.exports = mongoose.model('rooms', roomsSchema)