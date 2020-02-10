/* eslint-disable @typescript-eslint/no-unused-vars */
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import { Article } from "src/articles/article.entity";

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @OneToMany(type => Article, article => article.user, { eager: false })
    article: Article;
}