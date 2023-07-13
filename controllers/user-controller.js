const userService = require('../services/user-services')
const {validationResult} = require('express-validator')
const ApiError = require('../exceptions/api-error')
class UserController{
    async registration(req, res, next){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
              return next(ApiError.BadRequest('Помилка валідації', errors.array()))
            }
            const {name, email, password} = req.body;
            const userData = await  userService.registration(name, email, password);
            return res.json(userData);
        }catch (e){
            next(e);
        }
    }

    async login(req, res, next){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest('Помилка валідації', errors.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.login(email, password);
            return res.json(userData);
        }catch (e){
            next(e);
        }
    }
    async sendMoney(req, res, next){
        try {
            const {name, money}=  req.body;
            const userData = await userService.setMoney(name, money);
            return res.json(userData);
        }
        catch (e){

        }
    }
    async getUser(req, res, next){
        try{
            const {name} =  req.body;
            const userData = await userService.getUserName(name);
            return res.json(userData);
        }
        catch (e){

        }

    }
}

module.exports = new UserController()