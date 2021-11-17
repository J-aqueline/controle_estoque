const { Router } = require('express');
const router = Router();

const { addItem, selectAll } = require('../controller/item.controller')

router.post('/item' , addItem)
router.get('/item' , selectAll)

module.exports = router;