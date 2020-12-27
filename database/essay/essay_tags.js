const { insertTag } = require('../entity');
const { ESSAY } = require('../../config').TABLE;

const EssayTags = [
    insertTag(ESSAY, 1, "도"),
];

module.exports = EssayTags;
