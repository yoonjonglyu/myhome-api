const router = require('express').Router();
router.get('/', (req, res) => {
    res.send("Hello, world");
});

router.use('/post', require('./post'));

module.exports = router;