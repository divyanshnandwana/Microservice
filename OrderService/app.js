const express = require('express');
const app =  express();

const orderController = require('./controllers/Orders/OrderController')

app.use(express.json())

app.use('/order', orderController)



app.listen(3000, () => {
    console.log("Listening on 3000")
})