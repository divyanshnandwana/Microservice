const express = require('express')
const router = express.Router();

const Orderhandler = require('../../handler/OrderService')

router.post('/', (req, res) => {
    console.log(req.body);

    const result = Orderhandler(req.body);
    res.send('done')
    
})

module.exports = router