const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: String,
  description: String,
  duties: [{
    type: String
  }],
  img: String,
  links: [
    {
      name: String,
      link: String
    }
  ]
})

projectSchema.set('toJSON', {
    transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

module.exports = Project;