import path from "path";
import WithLineNumbers from "../components/WithLineNumbers";
import { res } from '../example'


export default function Split(props) {
    if (!props.code) props.code = ''

    const codeLength = props.code.split("\n").length;
    let a = new Array(codeLength); for (let i=0; i < codeLength; ++i) a[i] = '-';
    res.forEach(codeBlock => {
        const explanation = codeBlock.stenographyResponse.pm
        const startLine = codeBlock.startLine

       
        a[startLine - 1] = explanation.replaceAll('\n', ' ')
        
    })

    const joined_a = a.join('\n')

    return (
        <div className="container">
          <div className="column" style={{ maxWidth: 900 }}>
              Code
            <WithLineNumbers code={props.code} language="js" />
          </div>
          <div className="column">
            Explanation
            <WithLineNumbers code={joined_a} language="plaintext" />
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