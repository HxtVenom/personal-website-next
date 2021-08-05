import connectDB from '../../../middleware/mongodb';
const Project = require('../../../models/project');

const handler = async (req, res) => {
  const { method } = req;

  if(method == "POST"){
    const project = await JSON.parse(req.body);

    const newProject = new Project(project);

    const savedProject = newProject.save();

    if(!savedProject){
      return res.status(400).json({error: "Failed to save project"});
    }

    return res.status(200).json(savedProject);
  }else if(method == "GET"){
    const projects = await Project.find();

    if(projects.length == 0){
      return res.status(404).json({error: "No projects found"});
    }

    return res.status(200).json(projects);
  }
}

export default connectDB(handler);