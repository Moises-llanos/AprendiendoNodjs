const express = require('express');
const cors = require('cors');
const conectarDB = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.rutaPatch = '/';

        //conect base
        this.conectarDb();

        //middlewares
        this.middlewares();

        // rutas
        this.routes();

        // puerto
        this.listen();
    }

    async conectarDb() {
        await conectarDB();
    }

    middlewares() {

        // cors
        this.app.use(cors());

        // lectura y parse de json
        this.app.use(express.json());
    }


    routes() {

        this.app.use(this.rutaPatch, require('../routes/routes'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('corriendo en el puerto 8080');
        })
    }

}

module.exports = Server;