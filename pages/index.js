import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { res } from '../example'
import path from 'path'
// import Editor from 'react-simple-code-editor';


import Prism from 'prismjs';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'
import parse from 'html-react-parser';


export default function Home(props) {
  const explanations = res.map(codeblock => codeblock.stenographyResponse.pm)

  const highlighted = Prism.highlight(props.code, Prism.languages.javascript)

  return (
    <div className="container">
      <div className="column">
        
        <pre><code>{parse(highlighted)}</code></pre>
      </div>
      <div className="column">
        Explanation

      </div>
      
      <style jsx>{`
          .container {
            display: flex;
          }
          .column {
            flex: 1;
          }
      `}</style>
    </div>
  )
}

export async function getStaticProps(context) {
  const fs = require('fs/promises');

  const filePath = path.join(process.cwd(), 'example-code.js');
  console.log(filePath);
  const fileData = await fs.readFile(filePath, {
    encoding: 'utf-8'
  });

  return {
    props: {
      code: fileData.toString(),
    },
  };
}