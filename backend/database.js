const mongoose = require('mongoose');
require('dotenv').config();

const connection = MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}).then(() => console.log("Database Succesfully Connected")).catch((err) => console.log(err));

