const { Sport } = require("../models");

class SportControllers {
  static async showSports(req, res) {
    try {
      let sports = await Sport.findAll({
        order: [["name", "ASC"]],
      });

      res.status(200).render("./sport/sport.ejs", { sports });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async showSportsByAdmin(req, res) {
    try {
      let sports = await Sport.findAll({
        order: [["name", "ASC"]],
      });

      res.status(200).render("./sport/sportAdmin.ejs", { sports });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static addSportPage(req, res) {
    res.status(500).render("./sport/sportAdd.ejs");
  }

  static async addSport(req, res) {
    try {
      const { name, logo, venue, day, date, quota, detail } = req.body;
      await Sport.create({
        name,
        logo,
        venue,
        quota,
        day,
        date,
        detail,
      });
      res.status(201).redirect("/sport/admin");
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async detailSport(req, res) {
    try {
      const sportName = req.params.sportName;
      let sports = await Sport.findOne({
        where: {
          name: sportName,
        },
      });
      res.status(200).render("./sport/sportDetail.ejs", { sports });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editSportPage(req, res) {
    try {
      const sportName = req.params.sportName;
      let sports = await Sport.findOne({
        where: { name: sportName },
      });
      res.status(200).render("./sport/sportEdit.ejs", { sports });
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editSport(req, res) {
    try {
      const sportName = req.params.sportName;
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
          where: { name: sportName },
          individualHooks: true,
        }
      );

      result[0] === 1
        ? res.status(200).redirect("/sport/admin")
        : res.status(400).json({
            message: `${sportName} failed to update`,
          });
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
        ? res.status(200).redirect("/sport/admin")
        : res.status(400).json({
            message: `id ${id} failed to remove`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = SportControllers;
