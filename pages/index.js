import Head from 'next/head'
import Layout from '../components/Layout'
import Project from '../components/Project'

export default function Home() {
  return (
      <Layout>
        <Head>
          <title>Ricardo Ruiz - Home</title>
        </Head>
        <section>
              <Project/>
        </section>
      </Layout>
  )
}
