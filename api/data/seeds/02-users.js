
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_username: 'john-lennon',
          user_email: 'johnlennon@thebeatles.com',
          user_password: 'letitbeletitbeletitbeletitbe'
        }
       
          
]);
    });
};