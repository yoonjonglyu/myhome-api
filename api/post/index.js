const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Hello, POST");
});

module.exports = router;