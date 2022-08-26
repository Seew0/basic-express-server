const express = require('express')
const app = express()
const port = 3000

app.post('/', (req, res) => {
  const data = req.id;
  console.log(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})