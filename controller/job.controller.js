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
const editJob = async (req, res) => {
  console.log(req.query);
  try {
    const _id = req.query.id;

    const result = await jobModel.updateOne(
      { _id: _id },
      {
        $set: {// ✅ Correct operator
          ...req.query
        }
      }
    );

    if (!result) { // ✅ Check if job existed
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.json({
      success: true, // ✅ Correct spelling
      msg: "Job edited successfully"
    });

  } catch (err) {
    console.error(err); // Helpful for debugging
    res.status(400).json({
      success: false,
      message: "Some error happened while editing"
    });
  }
};

const deleteJob = async (req, res) => {
  try {
    const id = req.query.id; // assuming URL like /deleteJob?id=123
    console.log("Deleting job with ID:", id);

    const result = await jobModel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.json({
      success: true,
      message: "Job deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the job",
      error: error.message
    });
  }
};

const jobControllers = {
     getJob,
     createJob,
     editJob,
     deleteJob,
}
module.exports = jobControllers ;