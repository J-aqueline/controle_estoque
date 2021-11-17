const { v4: uuidv4 } = require ('uuid');
const { insert, select, selectById } = require ('../repository/categoria.repository');

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

module.exports = {
    addCategoria,
    getById,
    getAllCategoria
}