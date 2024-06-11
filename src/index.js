import RizzzBase from "rizzzbase"
import express from "express"
import cors from 'cors'

const rb = new RizzzBase()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('api running!')
})

app.get('/:database/:table/', (req, res) => {
  const { database } = req.params
  const { table } = req.params

  const data = rb.useDatabase(database).from(table).select('all').data
  
  res.send(data)
})

app.post('/add_data/:database/:table', (req, res) => {
  const { database } = req.params
  const { table } = req.params

  try {
    rb.useDatabase(database).from(table).addData(req.body)
    res.send('sukses')
  }
  catch (error) {
    res.send(error)
  }

})

app.listen(3004, () => console.log('server runn'))


