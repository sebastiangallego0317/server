const express = require('express');
const bodyParser = require('body-parser');
const jwtSender = require('./routes/jwtSender')
const addProduct = require('./routes/addProduct')

const register = require('./routes/register'); 
const auth = require('./routes/auth'); 
const products = require('./routes/products'); 

const signingKey = require('./config/keys');
const cookieParser = require('cookie-parser');

const app = express()
  .use(bodyParser.json())
  .use(cookieParser(signingKey.SIGNING_KEY_COOKIE))

let port = 10101

app.use('/register', register);
app.use('/auth', auth);
app.use('/products', products);
app.use('/readToken', jwtSender)
app.use('/addProduct', addProduct )

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});