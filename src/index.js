import express from "express"
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/:name', (req, res) => {
  fs.writeFileSync(process.cwd() + `/${req.params.name}.json`, '[]', 'utf-8')
  res.send({status: 'successs'})
})

app.listen(3004, () => console.log('server runn'))


