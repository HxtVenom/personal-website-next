import { useState } from 'react'
import Social from '../../components/Social'
import ModifyProject from './ModifyProject'

export default function Project ({project, mutate}) {
  const [edit, setEdit] = useState(false)

  const updateProject = async (newProject) => {
    const res = await fetch(`projects/${project.id}`, { method: "put", data: JSON.stringify(newProject) });
    const result = await res.json();

    if(result.error){
      return result.error;
    }

    mutate();
  }

  const closeEdit = () => {
    setEdit(false);
  }

  if(edit){
    return <ModifyProject project={project} modify={(newProject) => updateProject(newProject)} close={() => closeEdit()}/>
  }

  return (
    <div></div>
  )
}