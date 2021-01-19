const { insertTag } = require('../entity');
const { PORTFOLIO } = require('../../config').TABLE;

const portfolioTags = [
    insertTag(PORTFOLIO, 1, "HTML"),
    insertTag(PORTFOLIO, 2, "CSS"),
    insertTag(PORTFOLIO, 3, "JavaScript"),
    insertTag(PORTFOLIO, 4, "TypeScript"),
    insertTag(PORTFOLIO, 5, "React"),
    insertTag(PORTFOLIO, 6, "Node.js"),
    insertTag(PORTFOLIO, 7, "Vue"),
    insertTag(PORTFOLIO, 8, "PHP"),
    insertTag(PORTFOLIO, 9, "MySQL"),
];

module.exports = portfolioTags;
