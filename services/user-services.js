const UserModel = require('../models/user-module');
const UserDto = require('../dtos/user-dtos')
const ApiError = require('../exceptions/api-error')

class UserServices {
    async registration(name, email, password) {
        const candidate = await UserModel.findOne({email});
        const sameName = await UserModel.findOne({name});
        const money = 0;
        if (candidate && sameName) {
            throw new ApiError.BadRequest((`Користувач з такою поштою ${email} вже є або таким імя ${name}`));
        }
        const user = await UserModel.create({name, email, password, money});
        const userDto = new UserDto(user);
        return {
            user: userDto
        }
    }
    async login(email, password){
        const user = await UserModel.findOne({email});
        if(!user){
            throw ApiError.BadRequest('Користувач не знайдений');
        }
        const isPassEquals = password === user.password;
        if(!isPassEquals){
            throw ApiError.BadRequest('Неправильний пароль');
        }
        const userDto = new UserDto(user);
        return {user: userDto};
    }

    async setMoney(name, money){
        const user = await UserModel.updateOne({name}, {$set: {money}});
        const userDto = new UserDto(user);
        return {user: userDto}
    }
    async getUserName(name){
        const user = await UserModel.findOne({name});
        const userDto = new UserDto(user);
        return{user: userDto}
    }
}

module.exports = new UserServices()