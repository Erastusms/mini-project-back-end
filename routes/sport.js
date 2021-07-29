const SportRoutes = require("express").Router()
const SportControllers = require("../controllers/SportControllers")

SportRoutes.get("/", SportControllers.showSports)
SportRoutes.get("/add", SportControllers.addSportPage)
SportRoutes.post("/add", SportControllers.addSport)

module.exports = SportRoutes