const { Sport } = require("../models");

class SportControllers {
  static async showSports(req, res) {
    try {
      let sports = await Sport.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).render("./sport/sport.ejs", { sports });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static addSportPage(req, res) {}

  static async addSport(req, res) {
    try {
      const { name, logo, venue, quota, day, date, detail } = req.body;
      let sports = await Sport.create({
        name,
        logo,
        venue,
        quota,
        day,
        date,
        detail,
      });
      res.status(201).json(sports);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static updateSportPage(req, res) {}

  static async updateSport(req, res) {
    try {
      const id = +req.params.id;
      const { name, logo, venue, quota, day, date, detail } = req.body;
      let result = await Sport.update(
        {
          name,
          logo,
          venue,
          quota,
          day,
          date,
          detail,
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

  static async detailSport(req, res) {
    try {
      const sportName = req.params.sportName;
      let sports = await Sport.findAll({
        where: {
          name: sportName,
        },
      });
      res.status(200).render("./sport/sportDetail.ejs", { sports });
      // res.status(200).json(sports)
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async removeSport(req, res) {
    try {
      const id = +req.params.id;

      let result = await Sport.destroy({
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
  static async changeStatus(req, res) {
    try {
      const id = +req.params.id;
      let result = await Sport.update(
        {
          status: "Full",
        },
        { where: { id } }
      );
      result[0] === 1
        ? res.status(200).json({
            message: `Status ${id} has been changed to Full`,
          })
        : res.status(400).json({
            message: `Status ${id} failed to change`,
          });
    } catch (err) {
      res.status(200).json(err);
    }
  }
}

module.exports = SportControllers;
