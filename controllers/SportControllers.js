const { Sport } = require("../models")

class SportControllers {
    static async showSports(req,res) {
        try{
            res.status(200).json({
                message: `berhasil dimunculkan`
            })
        }
        catch(err) {
            res.status(500).json(err)
        }
    }

    static addSportPage(req,res) {
        
    }

    static async addSport(req,res) {
        try {

        }
        catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = SportControllers