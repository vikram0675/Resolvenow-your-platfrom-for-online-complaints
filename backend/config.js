const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Mohan:er2af5Q1UBCewcmZ@cluster0.di6bzxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongoDB Atlas")
})