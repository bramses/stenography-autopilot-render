import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import path from 'path'
import Link from 'next/link'
import Sideview from './sideview'
import * as _ from 'lodash'

export default function Home({ posts }) {

  return (
    <div className="container">

        {posts.map((post) => (
          <div key="diff-key">
            <Link href="/upload">
              <a style={{ color: 'blue', textDecoration: 'underline' }}>
                <h1>Make Your Own!</h1>
              </a>
            </Link>
            <p><a style={{ textDecoration: 'underline', color: 'blue '}} target="_blank" rel="noreferrer" href="https://stenography.dev/">Powered by Stenography</a></p>
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


  return {
    props: {
      posts: await Promise.all(wrapper),
    },
  }
}