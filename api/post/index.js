const router = require('express').Router();
const DB = require('../../database/index');
const { portpolio_tags } = require('../../database/portpolio/portpolio');
router.get('/', (req, res) => {

    res.send("Hello, POST");
});
router.get('/tags', (req, res) => {
    const TechTags = DB.queryTags("tech");
    const EssayTags = DB.queryTags("essay");
    const PortpolioTags = DB.queryTags("portpolio");
    res.send(`
    Hello, Tags<br />
    Tech : ${TechTags}<br />
    Essay : ${EssayTags}<br />
    portpolio : ${PortpolioTags}<br />
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