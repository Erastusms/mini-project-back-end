const CountryRoutes = require("express").Router()
const CountryControllers = require("../controllers/CountryControllers")

CountryRoutes.get('/', CountryControllers.showCountry)
CountryRoutes.get('/add', CountryControllers.addCountryPage)
CountryRoutes.post('/add', CountryControllers.addCountry)
CountryRoutes.get('/edit/:id', CountryControllers.updateCountryPage)
CountryRoutes.post('/edit/:id', CountryControllers.updateCountry)
CountryRoutes.get('/delete/:id', CountryControllers.removeCountry)


module.exports = CountryRoutes