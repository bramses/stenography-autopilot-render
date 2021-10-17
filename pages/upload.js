import { useState } from 'react';
import Sideview from './sideview'

export default function Upload () {

    const [apiKey, setAPIKey] = useState('');
    const [file, setFile] = useState(null);
    const [isModule, setIsModule] = useState(false);
    const [fileContents, setFileContents] = useState('');
    const [autopilot, setAutopilot] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const placeFileContent = async function (file) {
        return readFileContent(file).then(content => {
            return content
        }).catch(error => console.log(error))
    }
    
    const readFileContent = async function(file) {
      const reader = new FileReader()
      return new Promise((resolve, reject) => {
        reader.onload = event => resolve(event.target.result)
        reader.onerror = error => reject(error)
        reader.readAsText(file)
      })
    }

    const submitFile = async event => {
        event.preventDefault();
        console.log('on submit')

        if(!file) {
            alert('Please select a file to upload')
            return
        }

        const jsFile = file[0]
    

       const readJSFile = await placeFileContent(jsFile)
       setFileContents(readJSFile)

        const data = {
            file: readJSFile,
            api_key: apiKey,
            is_module: isModule
        }

        
        setIsLoading(true)
        const res = await fetch('/api/call_renderer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })



        const resJson = await res.json()
        if (resJson.error) {
            alert(resJson.error)
        } else {
            setAutopilot(resJson)
        }
        setIsLoading(false)
        
      };

      const saveFile = async (jsFileContent, filename, stenographyAutopilotResult = []) => {
        const saveData = {
            jsFile: jsFileContent,
            filename: filename,
            jsonFilename: jsFile.name.replace('.js', '.json'),
            jsonFile: stenographyAutopilotResult
          }

          console.log(saveData)

          return await fetch('/api/save_files', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(saveData),
          })
      }


    return (
        <div className="upload">
            <h1>Upload</h1>
            <p>
                Upload a Javascript file to the server.
            </p>
            <form id="my-form" onSubmit={submitFile}>
                <input type="file" name="file" onChange={e => setFile(e.target.files)} />
                <br />
                <br />
                <input type="text" onChange={e => setAPIKey(e.target.value)} name="api_key" placeholder="Stenography API Key" />
                <p><a style={{ textDecoration: 'underline', color: 'blue '}} target="_blank" rel="noreferrer" href="https://stenography.dev/">Get an API key here</a></p>
                <br />
                <br />
                <input type="checkbox" id="isModule" name="isModule" value="is_es6_module" onChange={(e) => setIsModule(e.target.checked)} />
                <label htmlFor="isModule">ES6 module?</label><br></br>
                <br />
                <br />
                <br />
                <input type="submit" value="Upload" />
            </form>
            {isLoading && <div>Loading...</div>}
            {autopilot && <div>
                <h2>Autopilot</h2>
                <Sideview  hydratedCodeBlocks={autopilot} code={fileContents}/>
            </div>}
        </div>
    )
}