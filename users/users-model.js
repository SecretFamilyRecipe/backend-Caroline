const db = require('../api/data/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('users').select('id', 'username').orderBy('id');       
}

function findBy(filter) {
    return db('users').where(filter).orderBy('id');
}


async function add(user) {
    try {
        const [id] = await db('users').insert(user, 'id');

        return findById(id);
    } catch (error) {
        throw error;
    }
    }

async function registerUser(user) {
    try {
        
        const [user_id]= await db('users').insert(user,'user_id');
    return findById(user_id);
    }   catch (error) {
    return error;
    }
}
function findById(user_id) {
    return db('users').where({ user_id }).first();
}