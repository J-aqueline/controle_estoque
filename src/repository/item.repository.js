const { Client } = require('pg');
const pgp = require('pg-promise')();
const cn = {
    user: 'postgres',
    host: 'localhost',
    database: 'controle_estoque',
    password: 'postgres',
    port: 5432,
    max: 10

}
const db = pgp(cn);

const insert = async (item) => {  
    try {
        const res = await db.one('insert into item (id, nome, descricao, quantidade, preco, id_categoria) values ($1, $2, $3, $4, $5, $6) returning *', [item.id.toString(), item.nome.toString(),item.descricao.toString(),item.quantidade.toString(),item.preco.toString(),item.idCategoria.toString()])
        return res;
    } catch(err){
        console.log(err)
    }
}

const select = async() => {
    try {
        const res = await db.any('select i.id, i.nome, i.descricao, i.quantidade, i.preco, c.id idCategoria, c.nome nomeCategoria from item i join categoria c on i.id_categoria = c.id')
        return res;
    } catch(err){
        console.log(err)
    }
}

const selectById = async(id) => {
    try {
        const res = await db.any("select i.id, i.nome, i.descricao, i.quantidade, i.preco, c.id idCategoria, c.nome nomeCategoria from item i join categoria c on i.id_categoria = c.id where i.id = $1 or i.nome = $1 or i.descricao like $1",['%'+id+'%'])
        return res;
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    insert, 
    select,
    selectById
}
