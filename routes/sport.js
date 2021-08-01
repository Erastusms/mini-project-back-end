const SportRoutes = require("express").Router()
const SportControllers = require("../controllers/SportControllers")

SportRoutes.get("/", SportControllers.showSports)
SportRoutes.get("/detail/:sportName", SportControllers.detailSport)
SportRoutes.get("/delete/:id", SportControllers.removeSport)
SportRoutes.get("/admin", SportControllers.showSportsByAdmin)
SportRoutes.get('/admin/add', SportControllers.addSportPage)
SportRoutes.post('/admin/add', SportControllers.addSport)
SportRoutes.get("/admin/edit/:sportName", SportControllers.editSportPage)
SportRoutes.post("/admin/edit/:sportName", SportControllers.editSport)

module.exports = SportRoutes