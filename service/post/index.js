// 사실 파일명을 죄다 index.js라고 짓는 것은 여기서 require해서 다 export 시켜주기 때문이다. 다른 구조도 같은 이유다.
const { PostModels } = require('../../models');

class PostService {
    getEssayList () {
        const result = PostModels.getEssayList();

        return result;
    }
    getTechList () {
        const result = PostModels.getTechList();

        return result;
    }
    getPortpolioList () {
        const result = PostModels.getPortpolioList();

        return result;
    }
}

module.exports = new PostService();