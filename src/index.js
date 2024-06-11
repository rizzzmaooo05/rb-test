import express from "express"
import cors from 'cors'
import fs from 'fs'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send({status: 'running!!!'}))

app.listen(3004, () => console.log('server runn'))


