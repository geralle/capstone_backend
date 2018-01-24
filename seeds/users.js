
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          f_name: 'geralle',
          l_name: 'estes',
          email: 'geralle@gmail.com',
          password: 'password123',
          phone_number: '1234567890'
        }
      ]);
    });
};
