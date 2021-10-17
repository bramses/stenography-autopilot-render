import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer';


export default function Sideview(props) {

    const hydratedCodeBlocks = props.hydratedCodeBlocks || []
    let code = props.code;
    let codeArr = code.split('\n')
    
    const codeArrLen = codeArr.length
    
    codeArr = codeArr.map((item, index) => {
        if (item === '') item = '-'
        return item
    })
    code = codeArr.join('\n')


    let hLines = []
    let explanations = new Array(codeArrLen); for (let i=0; i<codeArrLen; ++i) explanations[i] = '-';

    hydratedCodeBlocks.forEach(codeBlock => {
        const explanation = codeBlock.stenographyResponse.pm
        const startLine = codeBlock.startLine
        const endLine = codeBlock.endLine

        const localHighlights = []
        for (let i = startLine; i <= endLine; i++) {
            const highlightLine = `L-${i}`
            localHighlights.push(highlightLine)
        }
        hLines = hLines.concat(localHighlights)
        
       
        explanations[startLine - 1] = explanation.replace(/\n/g, ' ')
        
    })

    
    const newCode = explanations.join('\n');


    return (
        <div>
            {/* <input className="input" onKeyDown={() => {window.location.href = 'http://localhost:3000/sideview#line-56' }}  /> */}
            <ReactDiffViewer oldValue={code} onLineNumberClick={(lineId) => console.log(lineId)} highlightLines={hLines} disableWordDiff={true} newValue={newCode} splitView={true} leftTitle={"Code"} compareMethod={DiffMethod.TRIMMED_LINES} showDiffOnly={false} rightTitle={"Stenography Explanations"} />
            {/* <style jsx>{`
                .input {
                    width: 100vw;
                }
            `}</style> */}
        </div>
      )
}

