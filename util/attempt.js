const attempt = fn => {
    const go = async ( req, res, next ) => {
        return Promise.resolve( fn( req, res, next ) )
            .then( data => res.status( 200 ).json( data ) )
            .catch( err => {
                console.log( err )
                res.status( 500 ).json( { message: 'Server Error' } )
        } )
    }

    return go
}


export default attempt