import Sequelize from "sequelize";

export default class DbConnect {
    
    constructor( options ) {
        
        try {
            
            this.db = new Sequelize(
                options.database,
                options.username,
                options.password,
                {
                    host : options.host,
                    dialect : options.dialect
                }
            )

            this.#authenticate( this.db, options );

        } catch (error) {

            console.log( error );
            throw( error );

        }

    }

    #authenticate( db, options ) {
        try {

            db.authenticate();
            console.log( `Connection to -- ${ options.database } -- successful` )

        } catch (error) {

            console.log( `Error trying to connect to -- ${ options.database } --` )

        }
    }

    getInstance() {
        return this.db;
    }

};