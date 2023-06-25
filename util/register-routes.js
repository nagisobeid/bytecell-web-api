import fs from 'fs';

const registerRoutes = async router => {

    //return new Promise( async ( resolve, reject ) => {

        const BASE_DIR = process.cwd() + '/routes';

        let routes = fs.readdirSync( BASE_DIR );
        
        for ( const r of routes ) {
        //routes.forEach( route => {
    
            const filePath = BASE_DIR + '/' + r;
            let stats = fs.lstatSync(filePath);
    
            // If file, then register route
            if (stats.isFile()) {
                console.info("\nRegistering route: ", r);

                const endpoint = await import( `../routes/${r}` );

                for ( const route of endpoint.default.routes ) {

                    let endpointUrl = route['url'];

                    for ( const method of Object.keys(route['methods']) ) {
                        console.info("\t Creating route [%s]: %s", method, endpointUrl);
                        // Register the route
                        router[method](endpointUrl, route['methods'][method]);
                    };
                    
                }
            }
    
        }

      //  resolve( '\nALL ROUTES REGISTERED SUCCESSFULLY\n' )
      return( '\nALL ROUTES REGISTERED SUCCESSFULLY\n' )
    //} )
    
}

export default registerRoutes
