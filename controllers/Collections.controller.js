import CollectionService from '../services/Collections.service.js'

export default {
    getCollectionsStatus : async ( req, res, next ) => {
        try {
            const collections = await CollectionService.getCollectionsStatus()
            res.status( 200 ).json( collections )
        } catch ( err ) {
            console.log( err )
            next( new Error( 'An error occured while attempting to retrieve collections' ) )
        }
    }
}