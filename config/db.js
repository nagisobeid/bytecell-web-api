import dotenv from 'dotenv';
dotenv.config();

export default { 
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB,
    host: process.env.DB_SRVR,
    dialect : 'mssql'
}
  
