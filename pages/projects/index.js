import Head from 'next/head'
import Layout from '../../components/Layout'
import Project from '../../components/Project'

export default function Home({ projects }) {

  if(projects.error){
    return (
      <Layout>
        <Head>
          <title>Ricardo Ruiz - Home</title>
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
  const res = await fetch("http://localhost:3000/api/projects", { method: "GET" }) // ADD GET PROJECTS
  const projects = await res.json();

  return {
    props: {
      projects
    },
    revalidate: 10
  }
}