import CollectionController from '../controllers/Collections.controller.js'

export default {
    routes: [
        {
            url: '/collections/status',
            methods: {
                get : CollectionController.getCollectionsStatus,
                //post : CollectionController.getCollectionsStatus,
                //put : ProductController.updateProduct
            }
        }
    ] 
};

