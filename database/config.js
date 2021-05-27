const mongoose = require('mongoose');



const conectarDB = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('Base de datos online corriendo');

    } catch (error) {
        return new Error('There was a mistake')
    }


}

module.exports = conectarDB;