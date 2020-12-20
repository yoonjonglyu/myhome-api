// 사실 파일명을 죄다 index.js라고 짓는 것은 여기서 require해서 다 export 시켜주기 때문이다. 다른 구조도 같은 이유다.
const { PostModels } = require('../../models');

class TagsService {
    getAllTags () {
        const result = PostModels.getTags();

        return result;
    }
    getPostTags (type, idx) {
        const result = 0;

        return result;
    }
    getTableTags (table) {
        const result = 0;

        return result;
    }
}

module.exports = new TagsService();