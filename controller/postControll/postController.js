const { PostService } = require('../../service');

class PostController {
    getEssayList () {
        return PostService.getEssayList();
    }
    getTechList () {
        return PostService.getTechList();
    }
    getportfolioList () {
        return PostService.getportfolioList();
    }
    getEssay (idx) {
        return PostService.getEssay(idx);
    }
    getTech (idx) {
        return PostService.getTech(idx);
    }
    getportfolio (idx) {
        return PostService.getportfolio(idx);
    }
};

module.exports = new PostController();