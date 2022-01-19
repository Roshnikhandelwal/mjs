import  express from 'express';
//import {getEnvironmentVariables} from './environments/env.mjs';

import  mongoose from 'mongoose';
import UserRouter from './routers/UserRouter.mjs';
import bodyParser from 'body-parser';

export class Server {
    app = express();

    constructor() {
        //this.app = express()
        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }

    setConfigurations() {
        this.connectMongoDb();
        this.configureBodyParser();
    }

    connectMongoDb() {
        const databaseUrl ='mongodb+srv://test:mongodbuser@mongodbtrainingcluster-80cd4.mongodb.net/test?retryWrites=true&w=majority'
        //const databaseUrl = getEnvironmentVariables().db_url;
        mongoose.connect(databaseUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log('connected to database');
        });
    }

    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    setRoutes() {
        this.app.use('/api/user', UserRouter);
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Not Found',
                status_code: 404
            });
        })
    }

    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something Went Wrong. Please Try Again',
                status_code: errorStatus
            })
        })
    }
}
