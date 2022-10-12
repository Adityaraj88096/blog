import React from 'react'
import { getCategories, getCategoryPosts } from '../../services';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Categories, PostCard, PostWidget } from '../../components';

const CategoryPosts = ({ posts }) => {
    const router = useRouter();
    
    if (router.isFallback) {
      return <Loader />;
    }
  return (
    <div className="container mx-auto px-10 mb-8 ">
    <Head>
      <title> Blog App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
    <div className='lg:col-span-8 col-span-1'>
    {posts.map((post) => (<PostCard post={post.node} key={post.node.title} /> ))}
    </div>
  <div className='lg:col-span-4 col-span-1'>
      <div className='lg:sticky relative top-8'>
        <PostWidget />
        <Categories />
      </div>
  </div>
  </div>
  </div>
  )
}

export async function getStaticProps({ params }){
    const posts = await getCategoryPosts(params.slug)
    
    return {
        props: { posts },
    }

}
export async function getStaticPaths(){
    const categories = await getCategories();
    return{
        paths: categories.map(({ slug }) => ({ params: { slug } })),
        fallback: true,
    };
}


export default CategoryPosts;