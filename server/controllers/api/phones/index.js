const phonesApiController = (webApp, phonesService) => {
  webApp.apiRouter.get('/phones', phonesService.list)
  webApp.apiRouter.get('/phones/:id', phonesService.item)
}

module.exports = phonesApiController
