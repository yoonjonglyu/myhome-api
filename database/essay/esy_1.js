const { insertPost, insertTag } = require('../entity');
const { ESSAY } = require('../../config').TABLE;

const Essay = {
    title : "도",
    author : "ISA",
    tags : [insertTag(ESSAY, 1, "도")],
    date : "2020-12-06",
    description : "동양 철학에서 말하는 도 라는 것에 대한 개인적인 에세이",
    contents : 
    `<h3>도</h3><br />임시 글 내용`    
};

module.exports = insertPost(ESSAY, 1, Essay);