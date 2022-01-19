import {Router} from 'express';
import {UserController} from '../controllers/UserController.mjs';
import {UserValidators} from '../validators/UserValidators.mjs';

class UserRouter {
    router = Router();

    constructor() {
        //this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes() {
        this.router.post('/signup', UserValidators.signup(), UserController.signup);
    }

    postRoutes() {

    }

    patchRoutes() {

    }

    deleteRoutes() {

    }
}

export default new UserRouter().router;
