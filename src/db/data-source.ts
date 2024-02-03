import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"
import {CreateUsersTable1706967552665 } from "./migrations/1706967552665-CreateUsersTable"

export const AppDataSource = new DataSource({
    type:"postgres",
    host:'localhost',
    port:5432,
    username:"postgres",
    password:"1",
    database:"project_typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1706967552665],
    subscribers: [],
})
