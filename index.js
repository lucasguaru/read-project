const express = require('express')
const readContent = require('./read-content')
const app = express()
const port = 3000

var ignoreList = ['.classpath', '.project', 'exchange-docs', 'target'];
const basePath = 'C:\\workspace\\studio-workspace\\logger-performance\\src\\main\\mule';

app.get('/', (req, res) => {
    let result = readContent.readFiles(basePath, { ignoreList });
    res.json(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})