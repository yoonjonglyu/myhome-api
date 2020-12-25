const { insertTag } = require('../entity');
const tableName = "portpolio";

const portpolioTags = [
    insertTag(tableName, 1, "HTML"),
    insertTag(tableName, 2, "CSS"),
    insertTag(tableName, 3, "JavaScript"),
    insertTag(tableName, 4, "TypeScript"),
    insertTag(tableName, 5, "React"),
    insertTag(tableName, 6, "Node.js"),
    insertTag(tableName, 7, "Vue"),
    insertTag(tableName, 8, "PHP"),
    insertTag(tableName, 9, "MySQL"),
];

module.exports = portpolioTags;
