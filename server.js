const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");


const app = express();

app.use(cors());
app.use(express.json());


//routes middleware
app.use("/users",require("./routes/user"));
app.use("/send",require("./routes/sendEmail"));

//Catching 404 Error
app.use((req, res, next) => {
    const error = new Error("INVALID ROUTE");
    error.status = 404;
    next(error);
});

const PORT = 8008;
mongoose.connect("mongodb+srv://Gagan:gagan1234@cluster0.0lsmaun.mongodb.net/cicd?retryWrites=true&w=majority")
.then(()=>{
    console.log("database connected Succesfully".bgYellow.black);
    app.listen(PORT,()=>console.log(`server is running on port ${PORT}`.bgCyan.black))
})
.catch((err)=>{
   console.log(err.message.bgRed.black);
})

