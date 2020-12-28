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
    getEssay (idx) {
        const result = PostModels.getEssay(idx);
        result.essay = {
            title : result.essay.title,
            author : result.essay.author,
            tags : result.essay.tags,
            date : result.essay.date,
            contents : result.essay.contents
        };

        return result;
    }
    getTech (idx) {
        const result = PostModels.getTech(idx);
        result.tech = {
            title : result.tech.title,
            author : result.tech.author,
            tags : result.tech.tags,
            date : result.tech.date,
            contents : result.tech.contents
        };

        return result;
    }
    getPortpolio (idx) {
        const result = PostModels.getPortpolio(idx);
        result.portpolio = {
            title : result.portpolio.title,
            author : result.portpolio.author,
            tags : result.portpolio.tags,
            date : result.portpolio.date,
            contents : result.portpolio.contents
        };

        return result;
    }
}

module.exports = new PostService();