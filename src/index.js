import express from "express"
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  const data = fs.readFileSync(process.cwd() + '/src/test.txt', 'utf-8')
  res.send({status: 'successs', data})
})

app.listen(3004, () => console.log('server runn'))


