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
    return db('users as u')
        .where(filter)
        .select('u.id', 'u.username', 'u.password')
        .orderBy('u.id');

}

async function add(user) {
    const [id] = await db('users')
        .insert(user,'id');
    return db('users').findById(id);
    }  
    catch (error) {
    handleError(error)};
    }
}
function findById(id) {
    return db('users').where({ id }).first();
}