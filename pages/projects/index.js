import Head from 'next/head'
import Project from '../../components/Project'

const project2 = {
  name: "Personal Website",
  description: "Personal wesbite created with the goal of being used as a resume/portfolio.",
  duties: [
    "Designed and styled frontend using TailwindCSS",
    "Created backend endpoints to support CRUD operations through a REST API",
    "Created React components to ease development and webpage generation"
  ]
}

export default function Home({ projects }) {

  if(projects.error){
    return (
      <div>
        <Head>
          <title>Ricardo Ruiz - Projects</title>
        </Head>
        <h1>{projects.error}</h1>
      </div>
    )
  }

  return (
      <div>
        <Head>
          <title>Ricardo Ruiz - Home</title>
        </Head>
        <div className="mx-auto flex gap-4 justify-between flex-wrap">
          {
            projects.map(project => {
             return <Project key={project.id} project={project} />
            })
          }
        </div>
      </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/projects", { method: "GET" })
  const projects = await res.json();

  return {
    props: {
      projects
    },
    revalidate: 10
  }
}