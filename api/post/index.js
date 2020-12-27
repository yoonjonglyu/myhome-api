const router = require('express').Router();
const { TagsController } = require('../../controller');

router.get('/', (req, res) => {

    res.send("Hello, POST");
});
router.get('/tags', (req, res) => {
    try {
        const tags = TagsController.getTags();
        res.status(200).json(tags);
    } catch (e){
        res.status(400).send("tags를 불러오는 과정에서 예기치 못한 장애가 발생했습니다.");
        console.error(e);
    }
});
router.get('/essay', (req, res) => {
    res.send("Hello, Essay");
});
router.get('/tech', (req, res) => {
    res.send("Hello, Tech");
});
router.get('/portpolio', (req, res) => {
    res.send("Hello, Portpolio");
});

module.exports = router;