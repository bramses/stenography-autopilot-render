import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { res } from '../example'
import { useState, useEffect } from 'react'
import path from 'path'
// import Editor from 'react-simple-code-editor';
import Link from 'next/link'
import Sideview from './sideview'
import * as _ from 'lodash'



export default function Home({ posts }) {

  console.log(posts.length)



  return (
    <div className="container">

        {posts.map((post) => (
          <div key="idk">
            <h1>{post[0].filename}</h1>
            <Sideview  hydratedCodeBlocks={JSON.parse(post[1].content)} code={post[0].content}/>
          </div>
        ))}
     
    </div>
  )
}



export async function getStaticProps() {
  const fs = require('fs');

  const readDirRecursive = async (filePath) => {

    const dir = await fs.promises.readdir(filePath);
    const files = await Promise.all(dir.map(async realtivePath => {
      const absolutePath = path.join(filePath, realtivePath);
      const stat = await fs.promises.lstat(absolutePath);

      return stat.isDirectory() ? readDirRecursive(absolutePath) : absolutePath;
    }));

    return files;
  }

  const postsDirectory = path.join(process.cwd(), 'code-blocks')
  const filenamesDir = await readDirRecursive(postsDirectory)


  const wrapper = filenamesDir.map(async (filenames) => {
    const files = await Promise.all(filenames.map(async (filename) => {
      const fileContents = await fs.promises.readFile(filename, 'utf8')
     
      return {
        filename,
        content: fileContents,
      }
    }))
    return files
  })




  //   // Generally you would parse/transform the contents
  //   // For example you can transform markdown to HTML here

  //   return files
  // })
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: await Promise.all(wrapper),
    },
  }
}