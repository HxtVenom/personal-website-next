import Head from 'next/head'
import Layout from '../components/Layout'
import Project from '../components/Project'

const project = {
  name: "Project",
  img: "/../public/Screen2.png",
  description: "I did a project whose description is this.",
  duties: ["Created backend endpoints using Next.js and Express. Also continued on to add functionality for websocket communication", "Did this", "Did this", "Did this", "Did this", "I JUST DID MORE"]
}

const project2 = {
  name: "Project",
  img: "/../public/Screen.png",
  description: "I did a project whose description is this.",
  duties: ["Created backend endpoints using Next.js and Express. Also continued on to add functionality for websocket communication", "Did this", "Did this", "Did this", "Did this", "I JUST DID MORE"],
  links: [
    {
      link: "https://www.github.com/HxtVenom",
      name: "github"
    },
    {
      link: "https://www.linkedin.com/in/ricardoruiz12",
      name:"linkedin"
    },
    {
      link: "mailto:ricardo@rruiz.dev",
      name: 'email'
    }
  ]
}

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>Ricardo Ruiz - Home</title>
        </Head>
        <section>
              <Project project={project}/>
              <Project project={project2}/>
        </section>
      </Layout>
  )
}
