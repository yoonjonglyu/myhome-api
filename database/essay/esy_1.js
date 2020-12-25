const { insertPost, insertTag } = require('../entity');
const tableName = "essay";

const Essay = {
    title : "도",
    author : "ISA",
    tags : [insertTag(tableName, 1, "도")],
    description : "동양 철학에서 말하는 도 라는 것에 대한 개인적인 에세이",
    contents : `
        <h3>도</h3>
        임시 글 내용
    `    
};

module.exports = insertPost(tableName, 1, Essay);