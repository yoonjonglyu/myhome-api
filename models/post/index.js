/**
 * Post models
 */
const DAO = require('../dao');

class PostModels {
    getTags() {
        const result = {
            essay: DAO.getEssayTags(),
            tech: DAO.getTechTags(),
            portpolio: DAO.getPortpolioTags()
        }

        return result;
    }
}

module.exports = new PostModels();