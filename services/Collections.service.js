import { db } from '../database/index.js'

export default {
    getCollectionsStatus : async () => {
        const data = await db.query( `
                SELECT
                    * 
                FROM 
                    vwGetCollectionSyncStatus 
                ORDER BY LASTUPDATE` 
            )

        return data[0]
    }
}