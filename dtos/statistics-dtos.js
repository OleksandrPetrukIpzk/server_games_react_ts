module.exports = class StatisticsDto {
   id;
    name;
    isWin;
    time;
    commentaries;
    constructor(model) {
        this.id = model._id;
        this.name = model.name;
        this.isWin = model.isWin;
        this.time = model.time;
        this.commentaries = model.commentaries;
    }
}