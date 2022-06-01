const { User } = require('../models');

const userData = [{
    username: 'JustinV',
    password: 'password1'
},
{
    username: 'JustinW',
    password: 'password2'
},
{
    username: 'Brandon',
    password: 'password3'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;