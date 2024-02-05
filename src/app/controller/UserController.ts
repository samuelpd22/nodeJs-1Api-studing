import {Request, Response, Router } from 'express';
import { User } from '../entity/User';
import UserRepository from '../repository/UserRepository';
import IUser from '../interface/IUser';


const userRouter = Router();

userRouter.get('/',async (req:Request, res:Response):Promise<Response> =>{
    const users = await UserRepository.getUsers();
    return res.status(200).json(users);
})
export default userRouter;