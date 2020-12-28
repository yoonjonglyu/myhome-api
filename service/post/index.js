// 사실 파일명을 죄다 index.js라고 짓는 것은 여기서 require해서 다 export 시켜주기 때문이다. 다른 구조도 같은 이유다.
const { PostModels } = require('../../models');

class PostService {
    getEssayList () {
        const result = PostModels.getEssayList();
        result.essay = result.essay.map((post) => {
            return {
                idx : post.idx,
                title : post.title,
                author : post.author,
                tags : post.tags,
                date : post.date,
                description : post.description,
            };
        })

        return result;
    }
    getTechList () {
        const result = PostModels.getTechList();
        result.tech = result.tech.map((post) => {
            return {
                idx : post.idx,
                title : post.title,
                author : post.author,
                tags : post.tags,
                date : post.date,
                description : post.description,
            };
        })

        return result;
    }
    getPortpolioList () {
        const result = PostModels.getPortpolioList();
        result.portpolio = result.portpolio.map((post) => {
            return {
                idx : post.idx,
                title : post.title,
                author : post.author,
                tags : post.tags,
                date : post.date,
                description : post.description,
            };
        })

        return result;
    }
}

module.exports = new PostService();