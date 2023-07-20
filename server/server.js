const express = require('express');
const cors = require('cors') 
const app = express();
require('dotenv').config();
const port = process.env.PORT;

app.use( express.json() );
app.use( express.urlencoded({ etended: true }) );
app.use(cors()) 

require('./config/mongoose.config');
require('./routes/authors.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );


