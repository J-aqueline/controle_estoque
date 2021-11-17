const { add, getAll, getById } = require('../service/item.service'); 

const addItem = async (req , res) => { 
    return res.status(200).json(await add(req.body));
}

const selectAll = async (req , res) => { 
    return res.status(200).json(await getAll());
}

const selectId = async (req , res) => {
    return res.status(200).json(await getById(req.params.id));
}

module.exports = {
    addItem,
    selectAll,
    selectId

}