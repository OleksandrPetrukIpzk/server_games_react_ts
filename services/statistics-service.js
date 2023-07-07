const StatisticModule = require('../models/statistics-model')
const StatisticDto = require('../dtos/statistics-dtos')
class StatisticsService {
    async addStatus(name, isWin, time, commentaries) {
            const status = await StatisticModule.create({name, isWin, time, commentaries});
            const statusDto = new StatisticDto(status);
            return{status: statusDto}
    }
    async getStatisticsThisUser(name){
        const status = await StatisticModule.find({name});
        return {status};
    }
    async getAllStatistics(){
        const status = await StatisticModule.find();
        return{status}
    }
}
module.exports = new StatisticsService()