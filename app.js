const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

// Create a route for success page
app.post('/success', (req, res) => {

    const data = req.body;
    console.log(data);

    /*
    fname: 'Joe',
    lname: 'Shmo',
    email: 'jshmo@grc.edu',
    method: 'pickup',
    toppings: [ 'pepperoni', 'olives', 'sausage' ],  size: 'med',
    comment: 'make it fast!',
    discount: 'on'
    */

    //res.send('Thank you!');
    res.render('confirmation', { details : data });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});