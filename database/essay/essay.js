const essay_tags = require('./essay_tags');

const essay = {
    essay_tags : [
        ...essay_tags,
    ],
    essay_lists : [
        require('./esy_1'),
    ],
};

module.exports = essay;