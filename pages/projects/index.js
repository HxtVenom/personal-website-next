import Head from 'next/head'
import Layout from '../../components/Layout'
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

  const postProject = async () => {
    const res = await fetch("http://localhost:3000/api/projects", { method: "POST", body: JSON.stringify(project2) });

    console.log(res);
  }

  if(projects.error){
    return (
      <Layout>
        <Head>
          <title>Ricardo Ruiz - Projects</title>
        </Head>
        <h1>{projects.error}</h1>
      </Layout>
    )
  }

  return (
      <Layout>
        <Head>
          <title>Ricardo Ruiz - Home</title>
        </Head>
        <div className="flex flex-col space-y-4">
          {/* {<button onClick={() => postProject()}>Add Project</button>} */}
          {
            projects.map(project => {
             return <Project key={project.id} project={project} />
            })
          }
        </div>
      </Layout>
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