const { PostService } = require('../../service');

class PostController {
    getEssayList () {
        return PostService.getEssayList();
    }
    getTechList () {
        return PostService.getTechList();
    }
    getPortpolioList () {
        return PostService.getPortpolioList();
    }
    getEssay (idx) {
        return PostService.getEssay(idx);
    }
    getTech (idx) {
        return PostService.getTech(idx);
    }
    getPortpolio (idx) {
        return PostService.getPortpolio(idx);
    }
};

module.exports = new PostController();