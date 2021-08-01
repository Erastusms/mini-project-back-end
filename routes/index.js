const router = require("express").Router()

router.get("/", (req,res) => {
    res.status(200).render("index.ejs")
})
router.get("/admin", (req,res) => {
    res.status(200).render("admin.ejs")
})

const CountryRoutes = require("./country")
const SportRoutes = require("./sport")
const AthleteRoutes = require("./athlete")

router.use("/country", CountryRoutes);
router.use("/sport", SportRoutes);
router.use("/athlete", AthleteRoutes);

module.exports = router;