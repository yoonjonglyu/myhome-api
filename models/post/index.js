/**
 * Post models
 */
const DAO = require('../dao');

class PostModels {
    getTags () {
        const result = {
            essay: DAO.getEssayTags(),
            tech: DAO.getTechTags(),
            portpolio: DAO.getPortpolioTags()
        }

        return result;
    }
    getEssayList () {
        const result = {
            essay : DAO.getEssayList(),
        };

        return result;
    }
    getTechList () {
        const result = {
            tech : DAO.getTechList(),
        };

        return result;
    }
    getPortpolioList () {
        const result = {
            portpolio : DAO.getPortpolioList(),
        };

        return result;
    }
}

module.exports = new PostModels();