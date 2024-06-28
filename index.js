const express = require('express');
const app = express();
require('dotenv').config();


app.listen(process.env.PORT, err => err? console.log(err) : console.log(`Server is running on port number ${process.env.PORT}`));