const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { studentForm } = require('./routes/form');

app.use(express.json());
app.use('/student/forms', studentForm);
async function main(){
    await mongoose.connect("mongodb+srv://Pankeet16:AffQ5L0g0l9KRR1x@pankeet16.f6afc.mongodb.net/Student-Form");
    console.log("connected to Db");
    app.listen(8080);
}

main();
