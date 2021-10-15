import { parseDiff, Diff, Hunk, getChangeKey } from 'react-diff-view';
import path from 'path'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';
import { res } from '../example'


export default function Sideview(props) {

    let explStr = ''
    let explArr = []

    

    console.log(explArr)


    let oldCode = props.code;
    let oldCodeArr = oldCode.split('\n')
    
    const oldCodeArrLen = oldCodeArr.length
    
    oldCodeArr = oldCodeArr.map((item, index) => {
        if (item === '') item = '-'
        return item
    })
    oldCode = oldCodeArr.join('\n')
    
    console.log(oldCodeArrLen)
    console.log(oldCodeArr)



    let a = new Array(oldCodeArrLen); for (let i=0; i<oldCodeArrLen; ++i) a[i] = '-';
    res.forEach(codeBlock => {
        const explanation = codeBlock.stenographyResponse.pm
        const startLine = codeBlock.startLine
        // console.log('yo')
        // console.log(startLine)
        // console.log(explanation)
       
        a[startLine - 1] = explanation
        
    })

    
    console.log(a.length)
    console.log(a)
    const newCode = a.join('\n');

    // const hLines = ['L-12']

    return (
        <ReactDiffViewer oldValue={oldCode} codeFoldMessageRenderer={(opt) => {
            console.log(opt)
        }} disableWordDiff={true} newValue={newCode} splitView={true} leftTitle={"Code"} compareMethod={DiffMethod.TRIMMED_LINES} showDiffOnly={false} rightTitle={"Stenography Explanations"} />
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
