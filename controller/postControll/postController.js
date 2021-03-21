const { PostService } = require('../../service');

class PostController {
    getEssayList () {
        return PostService.getEssayList();
    }
    getTechList () {
        return PostService.getTechList();
    }
    getPortfolioList () {
        return PostService.getPortfolioList();
    }
    getEssay (idx) {
        return PostService.getEssay(idx);
    }
    getTech (idx) {
        return PostService.getTech(idx);
    }
    getPortfolio (idx) {
        return PostService.getPortfolio(idx);
    }
    getTagList (type, idx) {
        return PostService.getTagList(type, idx);
    }
};

module.exports = new PostController();