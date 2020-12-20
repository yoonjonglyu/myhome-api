const router = require('express').Router();
const { TagsController } = require('../../controller');

router.get('/', (req, res) => {

    res.send("Hello, POST");
});
router.get('/tags', (req, res) => {
    const tags = TagsController.getTags();
    
    res.send(`
    Hello, Tags<br />
    Tech : ${tags.tech}<br />
    Essay : ${tags.essay}<br />
    portpolio : ${tags.portpolio}<br />
    `);
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