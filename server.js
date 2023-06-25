import dotenv from 'dotenv';
dotenv.config();
import { connect } from './database/index.js';

export default { 
    run : ( app ) => {
        const server = app.listen( process.env.API_PORT, () => {
            console.log( 
                'app listening at http://%s:%s', 
                server.address().address, 
                process.env.API_PORT 
            );
    
            connect();
        });
    }
}
