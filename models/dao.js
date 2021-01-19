// 데이터 엑세스 레이어
/**
 * 굳이 간단한거에 이래야하나 싶지만 기본적인 구조를 맞춘다는 의미로 dao에서 db의 데이터를 엑세스한후 모델에 넣어준다.
 */
const DB = require('../database');

class DAO {
    getTechTags () {
        const TechTags = DB.queryTags("tech");
        
        return TechTags;
    }
    getEssayTags () {
        const EssayTags = DB.queryTags("essay");

        return EssayTags;
    }
    getportfolioTags () {
        const portfolioTags = DB.queryTags("portfolio");
        
        return portfolioTags;
    }
    getEssayList () {
        const EssayPostList = DB.queryPostList("essay");

        return EssayPostList;
    }
    getTechList () {
        const TechPostList = DB.queryPostList("tech");

        return TechPostList;
    }
    getportfolioList () {
        const PortpoilioPostList = DB.queryPostList("portfolio");

        return PortpoilioPostList;
    }
    getEssay (idx) {
        const EssayPost = DB.queryPost("essay", idx);
        
        return EssayPost;
    }
    getTech (idx) {
        const TechPost = DB.queryPost("tech", idx);

        return TechPost;
    }
    getportfolio (idx) {
        const portfolioPost = DB.queryPost("portfolio", idx);

        return portfolioPost;
    }
};

module.exports = new DAO();