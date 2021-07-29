const AthleteRoutes = require("express").Router()
const AthleteControllers = require("../controllers/AthleteControllers")

AthleteRoutes.get("/", AthleteControllers.showAthlete)
AthleteRoutes.get("/:id/add", AthleteControllers.addAthletePage)
AthleteRoutes.post("/:id/add", AthleteControllers.addAthlete)
AthleteRoutes.get("/edit/:id", AthleteControllers.updateAthletePage)
AthleteRoutes.post("/edit/:id", AthleteControllers.updateAthlete)
AthleteRoutes.get("/delete/:id", AthleteControllers.removeAthlete)


module.exports = AthleteRoutes