// 사실 파일명을 죄다 index.js라고 짓는 것은 여기서 require해서 다 export 시켜주기 때문이다. 다른 구조도 같은 이유다.
const { PostModels } = require('../../models');
const { ESSAY, TECH, PORTFOLIO } = require('../../config').TABLE;

class PostService {
    getEssayList() {
        const result = PostModels.getEssayList();
        result.essay = result.essay.map((post) => {
            return this.setPostList(post.idx, post.date, post.author, post.title, post.description, post.tags);
        })

        return result;
    }
    getTechList() {
        const result = PostModels.getTechList();
        result.tech = result.tech.map((post) => {
            return this.setPostList(post.idx, post.date, post.author, post.title, post.description, post.tags);
        })

        return result;
    }
    getportfolioList() {
        const result = PostModels.getportfolioList();
        result.portfolio = result.portfolio.map((post) => {
            return this.setPostList(post.idx, post.date, post.author, post.title, post.description, post.tags);
        })

        return result;
    }
    getEssay(idx) {
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
    getTech(idx) {
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
    getportfolio(idx) {
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
    getTagList(type, idx) {
        let postList = [];
        switch (type) {
            case ESSAY:
                postList = this.getEssayList()[ESSAY];
                break;
            case TECH:
                postList = this.getTechList()[TECH];
                break;
            case PORTFOLIO:
                postList = this.getportfolioList()[PORTFOLIO];
                break;
            default:
                break;
        }
        const result = postList.filter((post) => {
            post.postTags = post.postTags.filter((tag) => tag.idx === idx)
            if (post.postTags.length > 0) {
                return true;
            }
        }
        )

        return result;
    }

    setPostList(idx, title) {
        const _idx = idx;
        const _title = title;
        if (idx === undefined || title === undefined) {
            console.error("postList Invalid idx && title");
            return;
        }
        let _date, _author, _tags, _description;
        return {
            setDate (date) {
                _date = date;
                return this;
            },
            setAuthor (author) {
                _author = author;
                return this;
            },
            setTags (tags) {
                _tags = tags;
                return this;
            },
            setDescription (description) {
                _description = description;
                return this;
            },
            build () {
                return {
                    postIdx: _idx,
                    postTitle: _title,
                    postDate: _date,
                    postAuthor: _author,
                    postDescription: _description,
                    postTags: _tags,
                };
            }
        }
    }
    setPostContents() {
        let _title, _date, _author, _contents, _tags;

        return {
            setPostTitle (title) {
                _title = title;
                return this;
            },
            setPostDate (date) {
                _date = date;
                return this;
            },
            setPostauthor (author) {
                _author = author;
                return this;
            },
            setPostContents (contents) {
                _contents = contents;
                return this;
            },
            setPostTags (tags) {
                _tags = tags;
                return this;
            },
            build () {
                return {
                    postTitle: _title,
                    postDate: _date,
                    postAuthor: _author,
                    postContent: _contents,
                    postTags: _tags
                };
            }
        }
    }
    setPortfolioList(idx, title) {
        const _idx = idx;
        const _title = title;
        if (idx === undefined || title === undefined) {
            console.error("portfolio Invalid idx && title");
            return;
        }
        let _date, _tags, _thum, _description;
        return {
            setDate(date) {
                _date = date;
                return this;
            },
            setTags(tags) {
                _tags = tags;
                return this;
            },
            setThum(thum) {
                _thum = thum;
                return this;
            },
            setDescription(description) {
                _description = description;
                return this;
            },
            build() {
                return {
                    portfolioIdx: _idx,
                    portfolioTitle: _title,
                    portfolioDate: _date,
                    portfolioTags: _tags,
                    portfolioThum: _thum,
                    portfolioDescription: _description
                };
            }
        }
    }
}

module.exports = new PostService();