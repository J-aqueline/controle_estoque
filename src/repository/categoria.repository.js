const db = require('./connection');
const insert = async (categoria) => {  
    try {
        const res = await db.one('insert into categoria (id, nome) values ($1, $2) returning *', [categoria.id.toString(), categoria.nome.toString()])
        return res;
    } catch(err){
        console.log(err)
    }
}

const select = async() => {
    try {
        const res = await db.any('select * from categoria ')
        return res;
    } catch(err){
        console.log(err)
    }
}

const selectById = async(id) => {
    try {
        const res = await db.any('select * from categoria where id like $1 or nome like $1',['%'+id+'%'])
        return res;
    } catch(err){
        console.log(err)
    }
}

const deleteById = async(id) => {
    try {
        const res = await db.any('delete from categoria where id = $1', [id])
        return res;
    }catch (err){
        console.log(err)
    }
}

module.exports = {
    insert, 
    select,
    selectById,
    deleteById
}