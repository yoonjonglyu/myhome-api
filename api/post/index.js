const router = require('express').Router();
const { TagController, PostController } = require('../../controller');

router.get('/', (req, res) => {

    res.send("Hello, POST");
});
router.get('/tags', (req, res) => {
    try {
        const tags = TagController.getTags();

        res.status(200).json(tags);
    } catch (e) {
        res.status(400).send("tags를 불러오는 과정에서 예기치 못한 장애가 발생했습니다.");

        console.error(e);
    }
});
router.get('/essay', (req, res) => {
    try {
        const IDX = parseInt(req.query.idx);
        if(!isNaN(IDX)){
            const EssayPost = PostController.getEssay(IDX);

            res.status(200).json(EssayPost);
        } else {
            const EssayList = PostController.getEssayList();

            res.status(200).json(EssayList);
        }
    } catch (e) {
        res.status(400).send("에세이 목록을 불러오는 과정에서 예기치 못한 장애가 발생했습니다.");

        console.error(e);
    }
});
router.get('/tech', (req, res) => {
    try {
        const IDX = parseInt(req.query.idx);
        if(!isNaN(IDX)){
            const TechPost = PostController.getTech(IDX);

            res.status(200).json(TechPost);
        } else {
            const TechList = PostController.getTechList();

            res.status(200).json(TechList);
        }
    } catch (e) {
        res.status(400).send("기술 목록을 불러오는 과정에서 예기치 못한 장애가 발생했습니다.");

        console.error(e);
    }
});
router.get('/portfolio', (req, res) => {
    try {
        const IDX = parseInt(req.query.idx);
        if(!isNaN(IDX)){
            const portfolioPost = PostController.getportfolio(IDX);

            res.status(200).json(portfolioPost);
        } else {
            const portfolioList = PostController.getportfolioList();

            res.status(200).json(portfolioList);
        }
    } catch (e) {
        res.status(400).send("포트폴리오 목록을 불러오는 과정에서 예기치 못한 장애가 발생했습니다.");

        console.error(e);
    }
});
router.get('/taglist', (req, res) => {
    try {
        const TYPE = req.query.type;
        const IDX = parseInt(req.query.idx);
        const tagPostList = PostController.getTagList(TYPE, IDX);

        res.status(200).json(tagPostList);
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;