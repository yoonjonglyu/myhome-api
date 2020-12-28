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
    getEssay (idx) {
        const result = {
            essay : DAO.getEssay((idx - 1)),
        };

        return result;
    }
    getTech (idx) {
        const result = {
            tech : DAO.getTech((idx - 1)),
        };

        return result;
    }
    getPortpolio () {
        const result = {
            portpolio : DAO.getPortpolio((idx - 1)),
        };

        return result;
    }
}

module.exports = new PostModels();