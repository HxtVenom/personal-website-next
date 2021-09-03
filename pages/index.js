import Head from 'next/head'
import Link from 'next/link'
import Project from '../components/Project'

export default function Home({projects}) {
  return (
      <div>
        <Head>
          <title>Ricardo Ruiz - Home</title>
        </Head>
        <div className="flex flex-col space-y-3 mx-3">
          <h1 className="text-xl font-bold border-b-4 w-full">Recent Projects</h1>
          <div className="flex flex-wrap gap-4 justify-evenly max-w-full">
            {
              projects.map((project) => {
                return <Project key={project.id} project={project} />
              })
            }
            <div className="w-full">
              <Link href="/projects">
                <div className="
                my-2 w-max py-2 px-3 m-auto
                shadow-md rounded-md bg-gray-50 dark:bg-gray-800
                hover:cursor-pointer hover:text-white hover:bg-green-500 hover:opacity-75
                hover:shadow-lg
                ">
                  All Projects
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
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