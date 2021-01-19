// ORM OR Query Builder & Entity
/**
 * 데이터 베이스를 쓸건 아니지만 어쩄든 데이터를 저장할 공간이 필요하고 그렇다면 db dir에 저장하는게 맞겠지.
 * 원래는 모델이 데이터 모델이고 db가 db에 관련된 로직들 주로 sql 같은 부분을 담당해서 모델에서 맵핑 해주는 방식으로 쓰이지만
 * 이 프로젝트는 아주 단순하게 파일에 데이터를 기록해둘 것이기에 db dir자체가 db가 된다.
 */
const DATA = {};
DATA.ESSAY = require('./essay/essay');
DATA.portfolio = require('./portfolio/portfolio');
DATA.TECH = require('./tech/tech');

class DB {
    queryTags (table) {
        const result = Array.from(DATA[table.toUpperCase()][`${table}_tags`]);
        
        if (result === undefined){
            console.error(`${table} tag의 질의과정에서 문제가 발생 되었습니다.`)
            return [];
        } else if (result.length === 0){
            console.log(`${table}의 검색 결과를 찾을 수 없습니다.`);
        }

        return result;
    }
    queryPostList (table) {
        const result = Array.from(DATA[table.toUpperCase()][`${table}_lists`]);
        
        if (result === undefined){
            console.error(`${table} postList의 질의과정에서 문제가 발생 되었습니다.`)
            return [];
        } else if (result.length === 0){
            console.log(`${table}의 검색 결과를 찾을 수 없습니다.`);
            return [];
        }

        return result;
    }
    queryPost (table, idx) {
        const result = Array.from(DATA[table.toUpperCase()][`${table}_lists`])[idx];
        
        if (idx === undefined){
            console.error(`${table} post의 idx가 없습니다.`);
            return [];
        } else if (result === undefined){
            console.log(`${table}의 검색 결과를 찾을 수 없습니다.`);
            return [];
        }

        return result;
    }
}

module.exports = new DB();