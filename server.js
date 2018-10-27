//Dependencies
//===================================================
const express = require('express');
const path = require('path');
const bp = require('body-parser');

//Setting up the Express app
let app = express();
let PORT = process.env.PORT || 3000;

//Sets up the express add to handle json parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data =============================================
let reservations = [
    {
        name: "Ayn",
        phone: 5125551112,
        email: "email@email.com"
    },
    {
        name: "Steph",
        phone: 5126395872,
        email: "email2@email.com"
    },
    {
        name: "Amanda",
        phone: 5129280178,
        email: "email3@email.com"
    }
];
//Routes
//=======================================================
// CREATE NEW RESERVATION THAT TAKES IN JSON INPUT 
app.post("api/tables", function (req, res) {
    let newReservation = req.body;
});

app.get("/", function(req, res){
    let table = req.params.table;
})

// VARIABLES 
let customer = [];
let waitlist = [];

// IF / ELSE RESERVATIONS v WAITLIST 
app.post('/reservations', function (req, res){
    console.log("this is work");
    let newCustomer = req.body;
    if (customer.length >= 5) {
        waitlist.push(newCustomer);
    } else {
        customer.push(newCustomer);
    }
    res.json(newCustomer);
});

// SERVER LISTEN FUNCTION
app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
});