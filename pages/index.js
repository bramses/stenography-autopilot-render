import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { res } from '../example'
import { useState, useEffect } from 'react'
import path from 'path'
// import Editor from 'react-simple-code-editor';
import Link from 'next/link'



export default function Home(props) {

  console.log(props.posts)

  return (
    <div className="container">
      <ul>
        <li><Link href="/sideview"><a>test</a></Link></li>
        <li>file 2</li>
        <li>file 3</li>
      </ul>
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
  
    return files.flat();
  }

  const postsDirectory = path.join(process.cwd(), 'code-blocks')
  const filenames = await readDirRecursive(postsDirectory)
  console.log(filenames)


  const posts = filenames.map(async (filename) => {
    const fileContents = await fs.promises.readFile(filename, 'utf8')

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents,
    }
  })
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: await Promise.all(posts),
    },
  }
}