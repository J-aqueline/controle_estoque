const { add, getAll } = require('../service/item.service'); 

const addItem = async (req , res) => { 
    return res.status(200).json(await add(req.body));
}

const selectAll = async (req , res) => { 
    return res.status(200).json(await getAll());
}

module.exports = {
    addItem,
    selectAll

}