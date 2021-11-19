const { v4: uuidv4 } = require ('uuid');
const { insert, select, selectById, deleteById : deleteCategoriaById } = require ('../repository/categoria.repository');

const addCategoria = async (categoria) => {
    if (categoria.id === null || categoria.id === undefined){
        categoria.id = uuidv4()
    }
    return await insert(categoria);

}

const getAllCategoria = async () => {
    return await select();
}

const getById = async (id) => {
    return await selectById(id);
}

const deleteById = async (id) => {
    return await deleteCategoriaById(id);
}

module.exports = {
    addCategoria,
    getById,
    getAllCategoria,
    deleteById
}