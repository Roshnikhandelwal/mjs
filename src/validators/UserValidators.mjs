import {body} from "express-validator"

export class UserValidators {
    static signup() {
        return [body('email',"email is required").isEmail(),
        body('password',"password is required").isAlphanumeric()
            .isLength({min:8,max:20}).withMessage("password can be from 8-20 charectors only"), 
        body('username',"user name is required").isString()]; 

        }
}

