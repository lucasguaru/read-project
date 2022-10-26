const express = require('express')
const readContent = require('./read-content')
const app = express()
const port = 3000

var ignoreList = ['.classpath', '.project', 'exchange-docs', 'target'];
const basePath = 'C:\\workspace\\studio-workspace\\logger-performance\\src\\main\\mule';


app.use(express.json());

app.post('/get-info', (req, res) => {
    let body = req.body;
    let result = readContent.readFiles(body.basePath, { ignoreList });
    res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})