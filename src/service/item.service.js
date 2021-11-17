const { v4: uuidv4 } = require ('uuid');
const { insert, select } = require ('../repository/item.repository');

const add = async (item) => {
    if (item.id === null || item.id === undefined){
        item.id = uuidv4()
    }
    return await insert(item);

}

const getAll = async () => {
    return await select();
}

module.exports = {
    add,
    getAll
}