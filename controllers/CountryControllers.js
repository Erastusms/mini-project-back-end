const { Country } = require("../models");

class CountryControllers {
  static async showCountry(req, res) {
    try {
      let countries = await Country.findAll({
        order: [["name", "ASC"]],
      });
      res.status(200).render("./country/countries.ejs", { countries });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static addCountryPage(req, res) {
    res.status(200).render("./country/countriesAdd.ejs");
  }

  static async addCountry(req, res) {
    try {
      const { name } = req.body;
      let countries = await Country.create({
        name,
      });
      res.status(201).redirect("/country");
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async removeCountry(req, res) {
    try {
      const id = +req.params.id;

      let result = await Country.destroy({
        where: { id },
      });

      result === 1
        ? res.status(200).redirect("/country")
        : res.status(400).json({
            message: `Id ${id} failed to remove`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = CountryControllers;
