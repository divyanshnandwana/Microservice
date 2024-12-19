const express = require('express')
const router = express.Router();

router.post('/notify', (req, res) => {
    console.log(req.body);
})

module.exports = router