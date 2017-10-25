const webAppFactory = require('./modules/webApp')
const phonesService = require('./services/phones')
const phonesApiController = require('./controllers/api/phones')

const webApp = webAppFactory()
phonesApiController(webApp, phonesService)

webApp.start()
