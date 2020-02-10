import { EntityRepository, Repository } from "typeorm";
import { Article } from "./article.entity";
import { ArticleDto } from "./dto/article.dto";
import { Category } from "../categories/category.entity";
import { InternalServerErrorException } from "@nestjs/common";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    async getArticles(): Promise<Article[]> {
        const articles = await Article.find({});

        return articles;
    }

    async createAricle(articleDto: ArticleDto, category: Category): Promise<Article> {
        const { name, body } = articleDto;

        const article = new Article();
        article.name = name;
        article.body = body;
        article.category = category;

        try {
            await article.save()
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return article;
    }

    async updateArticle(id: number, articleDto: ArticleDto) {

        const article = await Article.findOne(id);

        if (!article) {
            throw new InternalServerErrorException();

        }
        const { name, body } = articleDto;
        article.name = name;
        article.body = body;
        
        try {
            await article.save()
        } catch (error) {
            throw new InternalServerErrorException();
        }

        return article;
    }
}