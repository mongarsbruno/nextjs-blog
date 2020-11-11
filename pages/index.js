import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({allPostsData}) {
  console.log('allPostsData', allPostsData)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, category, due }) => (
            <>
            <li className={utilStyles.listItem} key={id}>
              Titre : {title}
              <br />
              {id}
              <br />
              Cr&eacute;ation : {date}
              {category && <br />}
              {category && 'Cat&eacute;gorie : ' + category}
              {due && <br /> }
              {due && 'Pour le : ' +due}
            </li>
               <hr/>
               </>
          ))}
        </ul>
     
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
