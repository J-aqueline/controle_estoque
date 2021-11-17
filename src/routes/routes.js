const { Router } = require('express');
const router = Router();

const { addItem, selectAll, selectId } = require('../controller/item.controller')

router.post('/item' , addItem)
router.get('/item/:id', selectId)
router.get('/item' , selectAll)




module.exports = router;