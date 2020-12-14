const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Hello, POST");
});
router.get('/tags', (req, res) => {
    res.send("Hello, Tags");
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