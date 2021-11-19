const { v4: uuidv4 } = require ('uuid');
const { insert, select, selectById, deleteById : deleteItemById } = require ('../repository/item.repository');

const add = async (item) => {
    if (item.id === null || item.id === undefined){
        item.id = uuidv4()
    }
    return await insert(item);

}

const getAll = async () => {
    return await select();
}

const getById = async (id) => {
    return await selectById(id);
}


const deleteById = async (id) => {
    return await deleteItemById(id);
}

module.exports = {
    add,
    getAll,
    getById,
    deleteById
}