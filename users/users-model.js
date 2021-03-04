const db = require('../api/data/db-config');

module.exports = {
    registerUser,
    getAll,
    findBy,
    findById,
};

function getAll() {
    return db('users').orderBy('user_id');
}

function findBy(filter) {
    return db('users').where(filter).orderBy('user_id').first();

}

async function registerUser(user) {
    try {
        
        const [user_id]= await db('users').insert(user, user_id);
    return findById('user_id');
    }   catch (error) {
    return error;
    }
}
function findById(user_id) {
    return db('users').where({ user_id }).first();
}