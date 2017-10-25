const results = require('./results')
const R = require('ramda')

module.exports = (req, res) =>
  Promise.resolve(results)
    .then(list => R.find(R.propEq('id', parseInt(req.params.id)), list))
    .then(item => {
      item && res.status(200).send({ type: 'phone', data: item })
      throw new Error('Phone not found')
    })
    .catch(error => {
      // eslint-disable-next-line
      console.log(error)
      res.status(400).send({ type: 'phone', error: error.message })
    })
