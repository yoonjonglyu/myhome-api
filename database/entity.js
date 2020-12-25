class Entity {
    /**
     * @description 태그 엔티티
     * @param {String} table 테이블 이름 
     * @param {Number} idx 태그 index
     * @param {String} name 태그 이름
     */
    insertTag (table, idx, name) {
        try {
            /** 에러 핸들링 */
            if(table === undefined){
                throw Error("table은 빈값일 수 없습니다.");
            }
            if(idx === undefined){  
                throw Error(`${table} : idx는 빈값일 수 없습니다.`);
            }
            if(name === undefined){
                throw Error(`${table} : name은 빈값일 수 없습니다.`);
            }
            if(typeof idx !== "number"){
                throw Error(`${table} : idx가 number 타입이 아닙니다.`);
            }
            if(typeof name !== "string"){
                throw Error(`${table} : name이 string 타입이 아닙니다.`);
            }

            const result = {
                idx : idx,
                name : name
            };

            return result;
        } catch(e) {
            console.error(e);
        }
    };

    /**
     * @description 포스트 엔티티
     * @param {String} table 테이블 이름 
     * @param {Number} idx 포스트 인덱스
     * @param {Object} post 포스트 내용
     * @example
     * post {
     *  title : String
     *  author : String,
     *  tags : Array[{idx, name}],
     *  description : String,
     *  contents : String
     * }
     */
    insertPost (table, idx, post) {
        try {
            /** 에러 핸들링 */
            if(table === undefined){
                throw Error("table은 빈값일 수 없습니다.");
            }
            if(idx === undefined){  
                throw Error(`${table} : idx는 빈값일 수 없습니다.`);
            }
            if(post === undefined){
                throw Error(`${table} : post는 빈값일 수 없습니다.`);
            }
            if(typeof idx !== "number"){
                throw Error(`${table} : idx가 number 타입이 아닙니다.`);
            }
            if(typeof post !== "object"){
                throw Error(`${table} : post이 object 타입이 아닙니다.`);
            }
            if(post.title === undefined){
                throw Error(`${table} : post.title이 없습니다.`);
            }
            if(post.author === undefined){
                throw Error(`${table} : post.author이 없습니다.`);
            }
            if(post.tags === undefined){
                throw Error(`${table} : post.tags가 없습니다.`);
            }
            if(post.description === undefined){
                throw Error(`${table} : post.description이 없습니다.`);
            }
            if(post.contents === undefined){
                throw Error(`${table} : post.contents가 없습니다.`);
            }

            const result = {
                idx : idx,
                title : post.title,
                author : post.author,
                tags : post.tags,
                description : post.description,
                contents : post.contents
            };

            return result;
        } catch(e) {
            console.error(e);
        }
    };
};

module.exports = new Entity();