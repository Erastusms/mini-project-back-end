const SportRoutes = require("express").Router()
const SportControllers = require("../controllers/SportControllers")

SportRoutes.get("/", SportControllers.showSports)
SportRoutes.get("/add", SportControllers.addSportPage)
SportRoutes.post("/add", SportControllers.addSport)
SportRoutes.get("/edit/:id", SportControllers.updateSportPage)
SportRoutes.post("/edit/:id", SportControllers.updateSport)
SportRoutes.get("/delete/:id", SportControllers.removeSport)
SportRoutes.get("/:id/full", SportControllers.changeStatus)

module.exports = SportRoutes