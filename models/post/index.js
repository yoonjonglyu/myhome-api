/**
 * Post models
 */
const DAO = require('../dao');

class PostModels {
    getTags () {
        const result = {
            essay: DAO.getEssayTags(),
            tech: DAO.getTechTags(),
            portfolio: DAO.getportfolioTags()
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
    getportfolioList () {
        const result = {
            portfolio : DAO.getportfolioList(),
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
    getportfolio (idx) {
        const result = {
            portfolio : DAO.getportfolio((idx - 1)),
        };

        return result;
    }
}

module.exports = new PostModels();