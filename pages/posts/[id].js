import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title && <div>Titre : {postData.title}</div>}
        {postData.id && <div>id : {postData.id}</div>}
        {postData.date && <div>Date : {postData.date}</div>}

      </Layout>
    )
  }
  
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }
  