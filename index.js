const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 8080;
const jobRoutes = require("./route/job.routes");
app.use(express.json());
app.use("/api/v1/job",jobRoutes);
dotenv.config();

mongoose.connect(process.env.DB_URL)
.then(()=>{ console.log("connection successful");})
.catch(()=> console.log("some error happend"));

app.listen(process.env.PORT, ()=>{
     console.log(`server is running on port ${process.env.PORT}`);
})
