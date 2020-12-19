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
    getPortpolioTags () {
        const PortpolioTags = DB.queryTags("portpolio");
        
        return PortpolioTags;
    }
    getEssay () {
        return true;
    }
    getTech () {
        return true;
    }
    getPortpolio () {
        return true;
    }
};

module.exports = new DAO();