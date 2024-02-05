import { User  } from "../entity/User";
import IUser from "../interface/IUser";
import { AppDataSource } from "../../db/data-source";

const userRepository = AppDataSource.getRepository(User);

const getUsers = () :Promise<IUser[]> => {
    return userRepository.find();
}

export default {getUsers};