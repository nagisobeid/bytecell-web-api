import dotenv from 'dotenv';
dotenv.config();

import express, { Router } from 'express';
import bp from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import registerRoutes from './util/register-routes.js';
import checkAuthorize from './middleware/authorization.js';
import server from './server.js'

const app = express();

app.use(cors());

const router = Router();

registerRoutes( router )
    .then( ( r ) => {
        console.log( r );
        app.use( express.json({ limit: '50mb' }) );
        app.set( 'trust proxy', true) ;
        app.use( bp.json() );
        app.use( bp.urlencoded({ limit: '50mb', extended: true }) );
        app.use( morgan('combined') );

        app.use( checkAuthorize );
        app.use( '/api', router );

        app.use( ( error, req, res, next ) => {
            res.status( 500 ).json( { message : error.message } )
        } )

        server.run( app );
    })
    .catch( error => {
        console.log( error )
    })

