import { db } from '../database/index.js'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default {
    
    getProducts : async () => {
        const prods = await prisma.Prods.findMany();
        return prods
    },

    getProductById : async ( id ) => {
        const prod = await prisma.Prods.findUnique( { where : { id } } );
        return prod
    },

    updateProduct : async ( old_uuid, product ) => {
        await prisma.Prods.updateMany( { where : { uuid : old_uuid }, data : { uuid : product.uuid, href : product.href } } );
        const prod = await prisma.Prods.findUnique( { where : { id : product.id } } );
        return prod
    },

    getStaleProducts : async () => {
        /*const prods = await prisma.Prods.findMany( { where : { outOfStockCount : {
            gt : 300
        } } } );*/
        const prods = await prisma.$queryRaw
            `
            SELECT P.* FROM (
                SELECT P.UUID, MAX( P.ID ) AS ID FROM (
                    SELECT uuid, count( uuid ) as Total
                        FROM [byte_cell_db].[dbo].[Prods] where outOfStockCount > 300
                        group by uuid 
                    ) O INNER JOIN PRODS P ON O.uuid = P.uuid
                WHERE O.Total > 2
                GROUP BY P.uuid
            ) F INNER JOIN PRODS P ON F.ID = P.ID
            `;
        return prods
    }

}