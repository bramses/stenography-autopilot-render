// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';


export default function handler(req, res) {
    if (!req.body.filename) {
        res.statusCode = 400;
        res.end('No filename provided');
        return;
    }

    if (!req.body.jsonFilename) {
        res.statusCode = 400;
        res.end('No json filename provided');
        return;
    }

    if (!req.body.jsFile) {
        res.statusCode = 400;
        res.end('No js file provided');
        return;
    }

    if (!req.body.jsonFile) {
        res.statusCode = 400;
        res.end('No json file provided');
        return;
    }

    const jsonFile = req.body.jsonFile;
    const jsFile = req.body.jsFile;
    const jsonFilename = req.body.jsonFilename;
    const filename = req.body.filename
    console.log('save_files');

    if (!fs.existsSync(`./code-blocks/${filename}`)){
        console.log('creating folder');
        fs.mkdirSync(`./code-blocks/${filename}`);
    }
    // write js file
    fs.writeFile(`./code-blocks/${filename}/${filename}`, jsFile, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The js file was saved!");
    });

    // write json file
    fs.writeFile(`./code-blocks/${filename}/${jsonFilename}`, JSON.stringify(jsonFile), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The json file was saved!");
    });
  
    res.status(200).json({ name: 'John Doe' })
  }