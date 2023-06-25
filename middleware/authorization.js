
const checkAuthorize = function( req, res, next ) {
    if ( req.header('BYTECELLAPIKEY') != process.env.API_APIKEY ) {
      res.status(401).json( { message: 'error', data: 'Not Authorized' } )
    }
    else {
      next()
    }
}

export default checkAuthorize
