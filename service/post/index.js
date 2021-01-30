// 사실 파일명을 죄다 index.js라고 짓는 것은 여기서 require해서 다 export 시켜주기 때문이다. 다른 구조도 같은 이유다.
const { PostModels } = require('../../models');

class PostService {
    getEssayList () {
        const result = PostModels.getEssayList();
        result.essay = result.essay.map((post) => {
            return this.setPostList(post.idx, post.date, post.author, post.title, post.description, post.tags);
        })

        return result;
    }
    getTechList () {
        const result = PostModels.getTechList();
        result.tech = result.tech.map((post) => {
            return this.setPostList(post.idx, post.date, post.author, post.title, post.description, post.tags);
        })

        return result;
    }
    getportfolioList () {
        const result = PostModels.getportfolioList();
        result.portfolio = result.portfolio.map((post) => {
            return this.setPostList(post.idx, post.date, post.author, post.title, post.description, post.tags);
        })

        return result;
    }
    getEssay (idx) {
        const result = PostModels.getEssay(idx);
        result.essay = this.setPostContents().
        setPostTitle(result.essay.title).
        setPostDate(result.essay.date).
        setPostauthor(result.essay.author).
        setPostTags(result.essay.tags).
        setPostContents(result.essay.contents).
        build();

        return result;
    }
    getTech (idx) {
        const result = PostModels.getTech(idx);
        result.tech = this.setPostContents().
        setPostTitle(result.tech.title).
        setPostDate(result.tech.date).
        setPostauthor(result.tech.author).
        setPostTags(result.tech.tags).
        setPostContents(result.tech.contents).
        build();

        return result;
    }
    getportfolio (idx) {
        const result = PostModels.getportfolio(idx);
        result.portfolio = this.setPostContents().
        setPostTitle(result.portfolio.title).
        setPostDate(result.portfolio.date).
        setPostauthor(result.portfolio.author).
        setPostTags(result.portfolio.tags).
        setPostContents(result.portfolio.postContent).
        build();

        return result;
    }

    setPostList (idx, date, author, title, description, tags) { // 빌더 패턴마렵다..
        return {
            postIdx : idx,
            postDate : date,
            postAuthor : author, 
            postTitle : title,
            postDescription : description,
            postTags : tags,
        }
    }
    setPostContents(){
        let _title, _date, _author, _contents, _tags;

        return {
            setPostTitle : function (title) {
                _title = title;
                return this;
            },
            setPostDate : function (date) {
                _date = date;
                return this;
            },
            setPostauthor : function (author) {
                _author = author;
                return this;
            },
            setPostContents : function (contents) {
                _contents = contents;
                return this;
            },
            setPostTags : function (tags) {
                _tags = tags;
                return this;
            },
            build : function () {
                return {
                    postTitle : _title,
                    postDate : _date,
                    postAuthor : _author,
                    postContent : _contents,
                    postTags : _tags
                };
            }
        }

    }
}

module.exports = new PostService();