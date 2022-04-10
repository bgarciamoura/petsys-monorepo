import express, { Request, Response } from 'express';

import { UserController } from '../controllers/UserController';

const userRouter = express.Router();
const userController = new UserController();

userRouter.post('/users', userController.createUser);
userRouter.get('/users', userController.getUsers);
userRouter.get('/user/:id', userController.getUser);
userRouter.put('/users', userController.updateUser);
userRouter.delete('/users', userController.deleteUser);

export { userRouter };
