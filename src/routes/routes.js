const { Router } = require('express');
const router = Router();

const { addItem, selectAll, selectId } = require('../controller/item.controller')
const { addItemCategoria, selectIdCategoria, selectAllCategoria } = require('../controller/categoria.controller')

router.post('/item' , addItem)
router.get('/item/:id', selectId)
router.get('/item' , selectAll)

router.post('/categoria' , addItemCategoria)
router.get('/categoria/:id', selectIdCategoria)
router.get('/categoria' , selectAllCategoria)




module.exports = router;