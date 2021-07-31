const SportRoutes = require("express").Router()
const SportControllers = require("../controllers/SportControllers")

SportRoutes.get("/", SportControllers.showSports)
SportRoutes.get("/detail/:sportName", SportControllers.detailSport)
SportRoutes.get("/delete/:id", SportControllers.removeSport)
SportRoutes.get("/:id/full", SportControllers.changeStatus)

module.exports = SportRoutes