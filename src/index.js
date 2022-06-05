const express= require("express")
const bodyParser= require("body-parser")
const route= require("../src/route/route")
const mongoose= require("mongoose")
const multer = require('multer');
const app= express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())


mongoose.connect("mongodb+srv://gautamku1122:Sae755%40gautam@gautam.p4ovs.mongodb.net/group37Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});