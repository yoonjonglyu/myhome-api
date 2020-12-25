const { insertTag } = require('../entity');
const tableName = "essay";

const EssayTags = [
    insertTag(tableName, 1, "도"),
];

module.exports = EssayTags;
