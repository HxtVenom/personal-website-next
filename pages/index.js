import Head from 'next/head'
import Layout from '../components/Layout'
import ProjectPreview from '../components/ProjectPreview'

export default function Home({projects}) {
  return (
      <Layout>
        <Head>
          <title>Ricardo Ruiz - Home</title>
        </Head>
        <div className="flex flex-col space-y-3 mx-3">
          <h1 className="text-xl font-bold border-b-4 w-full">Recent Projects</h1>
          <div className="flex md:flex-row md:flex-wrap flex-col justify-evenly max-w-full">
            {
              projects.map((project) => {
                return <ProjectPreview key={project.id} project={project} />
              })
            }
          </div>
        </div>
      </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/projects/latest", { method: "GET" }) // ADD GET PROJECTS
  const projects = await res.json()

  return {
    props: {
      projects
    },
    revalidate: 10
  }
}