const express = require('express');
const cor = require('cors');
const path = require('path');
const app = express();
require('./database');

app.use(cors());

const users = require('/api/users');
app.use(express.static(path.join(__dirname, '../client/build')));
app.get(('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
}))

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port: #{port}`);
});