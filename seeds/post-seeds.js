const { Post } = require('../models');

const postData = [{
    title: 'Test Title 1',
    content: 'Test content for iniitial post',
    user_id: 1
},
{
    title: 'This is another test post that I made',
    content: 'This content is pretty cool.',
    user_id: 2
},
{
    title: 'This is the 3rd post',
    content: 'This was time consuming, but educational',
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;