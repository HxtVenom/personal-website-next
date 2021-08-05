import Head from 'next/head'
import Layout from '../components/Layout'
import Project from '../components/Project'

export default function Home({projects}) {
  return (
      <Layout>
        <Head>
          <title>Ricardo Ruiz - Projects</title>
        </Head>
        <section>
        </section>
      </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch() // ADD GET PROJECTS
  const projects = await res.json()

  return {
    props: {
      projects
    },
    revalidate: 10
  }
}