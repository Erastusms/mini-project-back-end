const SportRoutes = require("express").Router()
const SportControllers = require("../controllers/SportControllers")

SportRoutes.get("/", SportControllers.showSports)
SportRoutes.get("/admin", SportControllers.showSportsByAdmin)
SportRoutes.get('/admin/add', SportControllers.addSportPage)
SportRoutes.post('/admin/add', SportControllers.addSport)
SportRoutes.get("/detail/:sportName", SportControllers.detailSport)
SportRoutes.get("/admin/edit/:sportName", SportControllers.editSportPage)
SportRoutes.post("/admin/edit/:sportName", SportControllers.editSport)
SportRoutes.get("/delete/:id", SportControllers.removeSport)

module.exports = SportRoutes