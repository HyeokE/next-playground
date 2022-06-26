import type {InferGetStaticPropsType, NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import API, {DetailPostDataType} from './api/index';
import BlogLayout from "../layout/blog";

const Home = ({postList}:{postList: DetailPostDataType[]}) => {

  const post1 = postList[1];

console.log(post1)
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      asdsd
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
export async function getStaticProps() {
  const response = await API.getPostListData('?page=${1}&size=${16}')
  console.log(response)
  const postList = response.data.body.data.content;
  return {
    props: {
      postList,
    }
  }
}

export default Home
