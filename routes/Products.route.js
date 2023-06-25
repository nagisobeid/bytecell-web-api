import ProductController from '../controllers/Products.controller.js'

export default {
    routes: [
        {
            url: '/products/stale',
            methods: {
                get : ProductController.getStaleProducts
            }
        },
        {
            url: '/products/many/:uuid',
            methods: {
                //get : ProductController.getProductById,
                //post : ProductController.createProduct,
                put : ProductController.updateProduct
            }
        },
        {
            url: '/products/:id',
            methods: {
                get : ProductController.getProductById,
                //post : ProductController.createProduct,
                //put : ProductController.updateProduct
            }
        },
        {
            url: '/products',
            methods: {
                get : ProductController.getProducts
            }
        },
    ] 
};

