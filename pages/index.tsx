import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import API, {DetailPostDataType} from './api/index';
import BlogLayout from "../layout/blog";

const BlankLink = (props: any) => {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const Home: NextPage = () => {
  const [postList, setPostList] = useState<DetailPostDataType[]>([]);
  useEffect(()=>{
    API.getPostListData('?page=${1}&size=${16}').then(res=>{
      setPostList(res.data.body.data.content);
    })
  }, [])

  const post1 = postList[1];


  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      {post1 && (
          <div key={post1.postId}>
            <h1>{post1.title}</h1>
            <div>{post1.modifiedAt}</div>
            <BlogLayout post={post1}/>
          </div>
      )}
    </div>
  )
}

export default Home
