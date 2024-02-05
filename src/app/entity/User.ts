import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('varchar')
    name: string

    @Column('varchar')
    email: string


}
