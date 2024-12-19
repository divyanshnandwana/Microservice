const express = require('express');
const app =  express();

const UserRoute = require('./routes/Users')

app.use(express.json())

app.use('/user', UserRoute)

app.listen(4000, () => {
    console.log("Listening on 4000")
})