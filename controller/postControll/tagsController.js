const { TagsService } = require('../../service');

class TagsController {
    getTags () {
        return TagsService.getAllTags();
    }
};

module.exports = new TagsController();