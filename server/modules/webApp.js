/* eslint-disable no-console*/
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const WebAppFactory = () => {
  const app = express()
  const apiRouter = express.Router()

  app.all('/api/*', bodyParser.json())
  app.use(cors())
  app.use('/api', apiRouter)
  app.use(express.static('./public'))
  app.get('*', (req, res) => res.status(400).end())

  const start = () => {
    // eslint-disable-next-line no-undef
    const port = process.env.PORT || '3000'
    app.listen(
      port,
      err =>
        err
          ? console.log('Express could not be started', err)
          : console.log('Express listening at localhost:' + port)
    )
  }

  return {
    start,
    apiRouter
  }
}

module.exports = WebAppFactory
