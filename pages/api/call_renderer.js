// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async function handler(req, res) {

  if (!req.body.api_key) {
    res.statusCode = 400;
    res.json({
      error: 'Missing api_key'
    });
    return;
  }

  if (!req.body.file) {
    res.statusCode = 400;
    res.json({
      error: 'Missing file'
    });
    return;
  }

  const data = {
    "text": req.body.file,
    "api_key": req.body.api_key,
    "explain": true,
    "is_module": req.body.is_module || true
  }

  const result = await fetch('https://autopilot.onrender.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  let resJson = await result.json();
  console.log(resJson)

  if (Object.keys(resJson).length === 0) resJson = []
  if (!Array.isArray(resJson)) {
    res.status(400).send({ error: `Error parsing file: ${JSON.stringify(resJson)}` })
  } else {
    res.status(200).json(resJson)
  }
}
