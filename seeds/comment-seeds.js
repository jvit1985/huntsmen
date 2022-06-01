const { Comment } = require('../models');

const commentData = [{
    comment_text: "This is the 1st comment, and it's great!!",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "This is not good, not a fan",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "Best article ever posted. I love it!!!!",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;