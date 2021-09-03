import { useState } from "react";

export default function ModifyProject({ project, close, modify }) {
  const [name, setName] = useState(project.name || "");
  const [description, setDescription] = useState(project.description || "");
  const [duties, setDuties] = useState(project.duties || ["", ""]);
  const [links, setLinks] = useState(project.links || [{ name: "", link: "" }]);

  const updateDuties = (value, idx) => {
    var newDuties = [...duties];
    newDuties[idx] = value;

    setDuties(newDuties);
  };

  const addDuty = (e) => {
    e.preventDefault();
    const newDuties = [...duties, ""];
    setDuties(newDuties);
  };

  const removeDuty = (idx, e) => {
    e.preventDefault();
    const newDuties = [...duties];
    newDuties.splice(idx, 1);
    setDuties(newDuties);
  };

  const handleLinkChange = (value, idx, key) => {
    const newLinks = [...links];
    newLinks[idx][key] = value;

    setLinks(newLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name,
      description,
      duties,
      links,
    };

    console.log(newProject);
  };

  const addLink = (e) => {
    e.preventDefualt();
    setLinks([...links, { name: "", link: "" }]);
  };

  const removeLink = (idx, e) => {
    e.preventDefault();
    const newLinks = [...links];
    newLinks.splice(idx, 1);
    setLinks(newLinks);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Project Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div>
          <label>
            Responsibilities:
            {duties.map((duty, idx) => {
              return (
                <div key={idx}>
                  <input
                    type="text"
                    value={duty}
                    onChange={(e) => updateDuties(e.target.value, idx)}
                  />
                  <button onClick={(e) => removeDuty(idx, e)}>Delete</button>
                  <br />
                </div>
              );
            })}
          </label>
          <button onClick={(e) => addDuty(e)}>Add Responsibility</button>
        </div>
        <div>
          <label>
            Links:
            {links.map((link, idx) => {
              return (
                <div key={idx}>
                  <label>
                    Name:
                    <input
                      type="text"
                      value={link.name}
                      onChange={(e) =>
                        handleLinkChange(e.target.value, idx, "name")
                      }
                    />
                  </label>
                  <label>
                    Link:
                    <input
                      type="text"
                      value={link.link}
                      onChange={(e) =>
                        handleLinkChange(e.target.value, idx, "link")
                      }
                    />
                  </label>
                  <button onClick={(e) => removeLink(idx, e)}>Delete</button>
                </div>
              );
            })}
          </label>
          <button onClick={(e) => addLink(e)}>Add Link</button>
        </div>
        <input type="submit" value={project ? "Update" : "Save"} />
      </form>
    </div>
  );
}
