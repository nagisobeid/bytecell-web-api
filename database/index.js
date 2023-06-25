import DbConnect from '../infrastructure/database/DBConnect.js'
import dbConfig from '../config/db.js'

let db = false;

const connect = () => {

    const connection = new DbConnect( dbConfig );
    db = connection.getInstance();

}

export {
    connect,
    db
};