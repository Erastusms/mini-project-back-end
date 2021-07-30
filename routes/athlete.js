const AthleteRoutes = require("express").Router();
const AthleteControllers = require("../controllers/AthleteControllers");

AthleteRoutes.get("/", AthleteControllers.showAthlete);
AthleteRoutes.get("/:countryName/add", AthleteControllers.addAthletePage);
AthleteRoutes.post("/:countryName/add", AthleteControllers.addAthlete);
AthleteRoutes.get("/:countryName", AthleteControllers.showAthleteByCountryName);
AthleteRoutes.get("/:countryName/sport", AthleteControllers.showAthleteBySportName);
AthleteRoutes.get("/edit/:id", AthleteControllers.updateAthletePage);
AthleteRoutes.post("/edit/:id", AthleteControllers.updateAthlete);
AthleteRoutes.get("/delete/:id", AthleteControllers.removeAthlete);

module.exports = AthleteRoutes;
