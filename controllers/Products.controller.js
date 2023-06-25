import ProductService from '../services/Products.service.js'

const stringifyBigInt = ( _, value ) =>
    typeof value === 'bigint' ? value.toString() : value; // return everything else unchanged

export default {

    getProducts : async ( req, res, next ) => {
        try {
            const prods = await ProductService.getProducts()
            res.status( 200 ).json( prods )
        } catch ( err ) {
            console.log( err )
            next( new Error( 'An error occured while attempting to retrieve products' ) )
        }
    },

    updateProduct : async ( req, res, next ) => {
        try {
            const prod = await ProductService.updateProduct( req.params.uuid, req.body )
            res.status( 200 ).json( prod )
        } catch ( err ) {
            console.log( err )
            next( new Error( 'An error occured while attempting to update product' ) )
        }
    },

    getProductById : async ( req, res, next ) => {
        try {
            //const prod = await ProductService.getProductById( req.params.id )
            const prod = await ProductService.getProductById( Number( req.params.id ) )
            res.status( 200 ).json( prod )
        } catch ( err ) {
            console.log( err )
            next( new Error( 'An error occured while attempting to retrieve product' ) )
        }
    },

    getStaleProducts : async ( req, res, next ) => {
        try {
            const prods = await ProductService.getStaleProducts()
            res.status( 200 ).json( JSON.stringify( prods, stringifyBigInt ) )
        } catch ( err ) {
            console.log( err )
            next( new Error( 'An error occured while attempting to retrieve stale products' ) )
        }
    }
    
}