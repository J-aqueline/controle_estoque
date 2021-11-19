const { add, getAll, getById, deleteById : deleteItemById   } = require('../service/item.service'); 

const addItem = async (req , res) => { 
    return res.status(200).json(await add(req.body));
}

const selectAll = async (req , res) => { 
    return res.status(200).json(await getAll());
}

const selectId = async (req , res) => {
    return res.status(200).json(await getById(req.params.id));
}

const deleteById = async (req , res) => {
    return res.status(200).json(await deleteItemById(req.params.id))
}

module.exports = {
    addItem,
    selectAll,
    selectId,
    deleteById

}