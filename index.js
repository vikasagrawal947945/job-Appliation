const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const jobRoutes = require("./route/job.routes");
app.use(express.json());
app.use("/api/v1/job",jobRoutes);

mongoose.connect('mongodb+srv://vikasagrawal252:dloGf9vHIcmXYGjl@cluster0.7guyne2.mongodb.net/')
.then(()=>{ console.log("connection successful");})
.catch(()=> console.log("some error happend"));

app.listen(port , ()=>{
     console.log(`server is running on port ${port}`);
})
