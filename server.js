const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); 
const compression = require('compression');
const enforce = require('express-sslify');


if (process.env.NODE_ENV !== 'production') require('dotenv').config();  

// this line must below the above line, because it needs the secret key
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express(); 
const port = process.env.PORT || 5000; // localhost is on 3000, and server is on 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors()); 


if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(enforce.HTTPS({trustProtoHeader: true}));
    app.use(express.static( path.join(__dirname, 'client/build')));
   
    app.get('*', function(req, res){ 
        res.sendFile(path.join(path.join(__dirname, 'client/build', 'index.html')));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server running on port ' + port);
});

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
} )

app.post('/payment', (req, res) => {
    console.log('server receive post request.');
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'aud'
    };

    console.log('req: ', req); 
    
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr){
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ sucess: stripeRes });
        }
    });
});