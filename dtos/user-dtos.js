module.exports = class UserDto {
    name;
    email;
    id;
    money;
    constructor(model) {
        this.name = model.name;
        this.email = model.email;
        this.money = model.money;
        this.id = model._id;
    }
}