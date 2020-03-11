// entry point of the server code
// import libraries in the way before ES6
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // 'path' gets bundled into any node project by default. it's a native module. what this module path does is that it lets us build out pathing for our directories.

if (process.env.NODE_ENV !== 'production') require('dotenv').config();  // this loads .env into our process environment which allows our process.env to access that secret key.

// this line must below the above line, because it needs the secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express(); // express is just a library that allows us to build an API server easily. this instance is a new expression application.
const port = process.env.PORT || 5000; // localhost is on 3000, and server is on 5000

// we're gonna pass in bodyparser.json which means we're gonna make sure that any of the requests coming in, I want the server to process their body tag and convert ti to Jason so we can use it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // make sure the url is understandable for URL 
app.use(cors()); // cors stands for cross origin requests, what this does is if you think about it like this: our web server is being hosted from some origin(origin means like place, or port). when the front-end makes a request to the back-end, cors by default is to check to make sure the origin is the same. if it's not the same, then it dennies the request which is a safty feature.

// we're hosting our own web server: be able to serve all of the static files in our build, by the following:
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( // static: allows us to serve a certain file inside of input url path
        path.join(__dirname, 'client/build')   // tell us what directory we're currently in and then we are pointing to client/build    
    ));
   
    app.get('*', // * means any url, get means get-request
    function(req, res){ // req: actual request we get.
        // for any url request, we send the index.html file back to the front end.
        res.sendFile(path.join(path.join(__dirname, 'client/build', 'index.html')));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});

// build /payment route:
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'aud'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr){
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ sucess: stripeRes });
        }
    })
});