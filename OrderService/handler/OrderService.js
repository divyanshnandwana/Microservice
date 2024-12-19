const axios = require('axios');
const OrderData = [];

const Orderhandler = (orderEvent) => {
    try{
        console.log("orderEvent")
        // DB insertion Class should be called
        OrderData.push(orderEvent)

        notifyUser(orderEvent);

        return orderEvent

    }catch(err){
        console.log(err);
    }
}

const notifyUser = (orderDetails) => {
    try{
        //Api - After the call has been made the data will be printed in the 4000 port server
        const apiResult = axios.post("http://localhost:4000/user/notify", orderDetails)

    }catch(err){
        console.log(err);
    }
}

module.exports = Orderhandler