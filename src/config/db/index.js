const mongoose = require('mongoose')

async function connect() {
    
    const URI = 'mongodb+srv://phuc123:phuc123@cluster0.budqqj9.mongodb.net/';

    try {
        mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`DB connected successfully`)
    } catch (error) {
        console.log(`Connect failed !!! `)
    }
    

}

module.exports = { connect };