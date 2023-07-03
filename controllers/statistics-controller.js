const statisticsService = require('../services/statistics-service')
class StatisticsController{
    async sendData (req, res, next){
        try{
            const {name, isWin, time, commentaries} = req.body;
            const statisticsData = await statisticsService.addStatus(name, isWin, time, commentaries);
            return res.json(statisticsData)
        }catch (e){

        }
    }
    async getAllStatistics(req, res, next){
        try{
            const statisticsData = await statisticsService.getAllStatistics();
            return res.json(statisticsData)
        }catch (e){

        }
    }
}
module.exports = new StatisticsController()