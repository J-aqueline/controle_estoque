const { addCategoria, getAllCategoria, getById , deleteById : deleteByIdCategoria } = require('../service/categoria.service'); 

const addItemCategoria = async (req , res) => { 
    if (req.url.endsWith('/')) {
        res.redirect(301, req.url.slice(0, 44))
    }
    return res.status(200).json(await addCategoria(req.body));
}

const selectAllCategoria = async (req , res) => { 
    if (req.url.endsWith('/')) {
        res.redirect(301, req.url.slice(0, 44))
    }
    return res.status(200).json(await getAllCategoria(req.body));
}

const selectIdCategoria = async (req , res) => {
    return res.status(200).json(await getById(req.params.id));
}

const deleteById = async (req , res) => {
    return res.status(200).json(await deleteByIdCategoria(req.params.id))
}

module.exports = {
    addItemCategoria,
    selectAllCategoria,
    selectIdCategoria,
    deleteById

}