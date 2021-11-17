const { addCategoria, getAllCategoria, getById } = require('../service/categoria.service'); 

const addItemCategoria = async (req , res) => { 
    return res.status(200).json(await addCategoria(req.body));
}

const selectAllCategoria = async (req , res) => { 
    return res.status(200).json(await getAllCategoria(req.body));
}

const selectIdCategoria = async (req , res) => {
    return res.status(200).json(await getById(req.params.id));
}

module.exports = {
    addItemCategoria,
    selectAllCategoria,
    selectIdCategoria

}