 //job Application Bussiness logic
const jobModel = require("../models/job.model")

const createJob = async (req, res) => {
  try {
    console.log(req.body);
    await jobModel.create(req.body);
    res.json({
      success: true,
      msg: "Job created successfully"
    });
  } 
  catch (err) {
    res.status(400).json({
      success: false,
      message: "Some error happened in creating job",
      error: err.message
    });
  }
};


const getJob = async(req,res)=>{
  const result = await jobModel.find();
     res.json({
         sucess : true,
         msg : "getting job details",
         res : result
     })
}
const editJob =(req,res)=>{
      res.json({
         sucess: true,
         msg : "editing job details"
      })
}
const deleteJob = (req,res)=>{
      res.json({
         sucess : true,
         msg : "deleting job details"
     })
}
const jobControllers = {
     getJob,
     createJob,
     editJob,
     deleteJob,
}
module.exports = jobControllers ;