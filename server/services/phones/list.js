const results = require('./results')

module.exports = (req, res) =>
  Promise.resolve()
    .then(() => res.status(200).send({ type: 'phones', data: results }))
    .catch(error => {
      // eslint-disable-next-line
      console.log(error)
      res.status(400).send({ type: 'phones', error })
    })
