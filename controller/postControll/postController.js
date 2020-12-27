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
};

module.exports = new PostController();