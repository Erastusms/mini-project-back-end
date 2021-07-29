const { Athlete, Country, Sport } = require("../models");

class AthleteControllers {
  static async showAthlete(req, res) {
    try {
      let athletes = await Athlete.findAll({
        include: [Country, Sport],
        order: [["id", "ASC"]],
      });

      res.status(200).json(athletes);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static addAthletePage(req, res) {}

  static async addAthlete(req, res) {
    try {
      const CountryId = +req.params.id;
      const { first_name, last_name, sport_name } = req.body;
      const sports = await Sport.findOne({
        where: {
          name: sport_name,
        },
      });

      let SportId = sports.id;

      let result = await Athlete.create({
        first_name,
        last_name,
        CountryId,
        SportId,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static updateAthletePage(req, res) {}
  static async updateAthlete(req, res) {
    try {
      const id = +req.params.id;
      const { first_name, last_name, sport_name } = req.body;
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
          SportId,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(200).json({
            message: `Id ${id} success to update`,
          })
        : res.status(400).json({
            message: `id ${id} failed to update`,
          });
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
        ? res.status(200).json({
            message: `Id ${id} has been removed`,
          })
        : res.status(400).json({
            message: `id ${id} failed to remove`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = AthleteControllers;
