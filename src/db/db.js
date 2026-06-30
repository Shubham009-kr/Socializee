const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://mrshubhamkr2000_db_user:L9KG9df6ghXSJNuk@cluster0.seqrteg.mongodb.net/socializee-wall");

    console.log("MongoDB connected successfully");
}

module.exports = connectDB;