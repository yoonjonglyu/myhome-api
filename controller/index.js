/**
 * 사실 컨트롤러 만으로는 구성이 부족하다. 컨트롤러 자체는 관리 역할 이상을 벗어나면 안된다. 그렇지 않다면 컨트롤러 부분이 너무 비대해지는 문제가 발생 할 수 있기 때문
 * 컨트롤러는 사실 공급자의 역할과도 비슷하다. 3계층 구조를 기준으로 보면 어플리케이션 계층의 서로 필요한 부분들을 묶어주는 역할을 담당한다.
 * 컨트롤러 이외에도 비즈니스 로직을 처리하는 곳, 그리고 서비스 레이어(DTO, VO)가 있어야한다.
 * 모델 이외에 비즈니스 로직을 처리하는 곳이 필요한 이유는 일종의 미들웨어 나 공용 hook api 같은게 필요하기 때문이다.
 */
const TagController = require('./postControll/tagController');
const PostController = require('./postControll/postController');

const controller = { // 이것도 사실 컨트롤러가 너무 비대해 질 경우 이런 식으로 결집시켜서 사용하는 것은 그닥 바람직한 방향이 아니다. 컨트롤러는 단일 컨트롤러가 아니기 때문이다.
    TagController,
    PostController
}

module.exports = controller;