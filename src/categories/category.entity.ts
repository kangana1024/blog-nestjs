import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Article } from "../articles/article.entity";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn({type:"bigint"})
    id: number;

    @Column()
    name: string;

    @Column({type:"bigint",default:0})
    parent: number;

    @OneToMany(type => Article, article => article.category,{eager:false})
    article: Article[];

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}