const { Athlete, Country, Sport } = require("../models");

class AthleteControllers {
  static async showAthlete(req, res) {
    try {
      let athletes = await Athlete.findAll({
        include: [Country, Sport],
        order: [["gender", "ASC"]],
      });

      res.status(200).render("./athlete/athlete.ejs", { athletes });
      // res.status(200).json(athletes)
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addAthletePage(req, res) {
    try {
      let sports = await Sport.findAll({
        where: {
          status: "Playing",
        },
      });
      let country = req.params.countryName;

      res.status(201).render("./athlete/athleteAdd.ejs", { sports, country });
      // res.status(200).json(athletes)
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addAthlete(req, res) {
    try {
      const countryName = req.params.countryName;
      const countries = await Country.findOne({
        where: {
          name: countryName,
        },
      });

      const { first_name, last_name, gender, age, sport_name } = req.body;
      const sports = await Sport.findOne({
        where: {
          name: sport_name,
        },
      });

      let SportId = sports.id;
      let CountryId = countries.id;

      let result = await Athlete.create({
        first_name,
        last_name,
        gender,
        age,
        CountryId,
        SportId,
      });
      res.status(201).redirect("/country");
      // res.status(201).json(result)
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async updateAthletePage(req, res) {
    try {
      const id = +req.params.id;
      let athletes = await Athlete.findOne({
        where: {
          id,
        },
      });
      let sports = await Sport.findAll()
      res.render("./athlete/athleteUpdate.ejs", { athletes, sports });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updateAthlete(req, res) {
    try {
      const id = +req.params.id;
      const { first_name, last_name, gender, age, sport_name } = req.body;
      const sports = await Sport.findOne({
        where: {
          name: sport_name,
        },
      });

      let SportId = sports.id;
      let result = await Athlete.update(
        {
          first_name,
          last_name,
          gender,
          age,
          sport_name,
          SportId,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(200).json({
          message: `Id ${id} has been updated!`
        })
        : res.status(400).json({
            message: `id ${id} failed to update`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showAthleteByCountryName(req, res) {
    try {
      const countryName = req.params.countryName;
      let countries = await Country.findOne({
        where: {
          name: countryName,
        },
      });

      const CountryId = countries.id;

      let athletes = await Athlete.findAll({
        where: {
          CountryId,
        },
        include: [Country, Sport],
        order: [["gender", "ASC"]],
      });
      res.status(200).render("./athlete/athlete.ejs", { athletes });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showAthleteBySportName(req, res) {
    try {
      const countryName = req.params.countryName;
      let countries = await Country.findOne({
        where: {
          name: countryName,
        },
      });

      const CountryId = countries.id;
      let athletes = await Athlete.findAll({
        where: {
          CountryId,
        },
        include: [Country, Sport],
      });
      res
        .status(200)
        .render("./athlete/athleteBySport.ejs", { countries, athletes });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showCountryBySportName(req, res) {
    try {
      let sportName = req.params.sportName;
      let sports = await Sport.findOne({
        where: {
          name: sportName,
        },
      });

      const SportId = sports.id;
      let athletes = await Athlete.findAll({
        where: {
          SportId,
        },
        include: [Country, Sport],
      });
      res
        .status(200)
        .render("./country/countryBySport.ejs", { sports, athletes });
      // res.status(200).json(athletes)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async removeAthlete(req, res) {
    try {
      const id = +req.params.id;

      let result = await Athlete.destroy({
        where: { id },
      });
      result === 1
        ? res.redirect("/")
        : res.status(400).json({
            message: `id ${id} failed to remove`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = AthleteControllers;
