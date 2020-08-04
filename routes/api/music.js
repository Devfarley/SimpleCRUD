const express = require('express');
const router = express.Router();
const {
    readMusic,
} = require('../../data/music')

router.get('/', (req, res) => {
    readMusic().then(data => {
        res.send(data);
    });
});


module.exports = router
