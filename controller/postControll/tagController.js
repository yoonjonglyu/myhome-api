const { TagService } = require('../../service');

class TagController {
    getTags () {
        return TagService.getAllTags();
    }
};

module.exports = new TagController();