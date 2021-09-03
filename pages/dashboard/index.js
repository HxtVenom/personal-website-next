import useSWR, { mutate } from 'swr'
import Error from '../../components/Error'
import Project from '../../components/dashboard/Project'
import ModifyProject from '../../components/dashboard/ModifyProject';

const fetcher = url => fetch(url).then(r => r.json());

export default function Home (){

  const { data: projects, error } = useSWR('api/projects', fetcher)

  if(error) return <Error message={error}/>
  if(!projects) return <h1>Loading...</h1>

  const reValidateProjects = () => {
    console.log("Revalidating")
    mutate('api/projects')
  }

  return (
    <div>
      {/* Projects */}
      <div>
        <ModifyProject key="dummy" project={{new: true}}/>
        <h1 className="font-bold text-xl border-b-2">Projects</h1>
        {projects.map(project => {
          return <Project key={project.id} project={project}/>
        })}
      </div>
    </div>
  )

}
