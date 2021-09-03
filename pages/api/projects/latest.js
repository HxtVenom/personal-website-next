import connectDB from '../../../middleware/mongodb';
const Project = require('../../../models/project');

const handler = async (req, res) => {
  const { method } = req;

  if(method == "GET"){
    const projects = await Project.find().sort({createdAt: -1}).limit(3);

    if(projects.length == 0){
      return res.status(404).json({error: "No projects found"});
    }

    return res.status(200).json(projects);
  }
}

export default connectDB(handler);