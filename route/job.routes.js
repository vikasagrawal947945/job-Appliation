const express =  require("express");
const route = express.Router();

//job App bussiness logic
const jobControllers   =require("../controller/job.controller");

route.get("/getJob",jobControllers.getJob)

route.post("/createJob",jobControllers.createJob)

route.patch("/editJob",jobControllers.editJob)

route.delete("/deleteJob",jobControllers.deleteJob)




module.exports = route;