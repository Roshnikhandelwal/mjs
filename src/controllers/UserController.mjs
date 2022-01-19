import { validationResult } from "express-validator";

export class UserController {
    static signup(req, res, next) {
        // console.log(req); return
        const errors = validationResult(req)
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return res.status(400).json({ errors: errors.array() });
        // }
       
        if(!errors.isEmpty()){
            console.log(errors.array());
            return res.status(400).json({ errors: errors.array() });
            next(new Error(error.array()[0].msg))
        }
    }
}
