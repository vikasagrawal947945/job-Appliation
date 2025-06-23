const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;
const jobRoutes = require("./route/job.routes");
app.use(express.json());
app.use("/api/v1/job",jobRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/jobDb')
.then(()=>{ console.log("connection successful");})
.catch(()=> console.log("some error happend"));

app.listen(port , ()=>{
     console.log(`server is running on port ${port}`);
})
