import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { ArticleDto } from './dto/article.dto';
import { Article } from './article.entity';
import { CategoryRepository } from '../categories/categories.repository';
import { Category } from '../categories/category.entity';

@Injectable()
export class ArticlesService {
    constructor(
        @InjectRepository(ArticleRepository)
        private articleRepository: ArticleRepository,
        @InjectRepository(CategoryRepository)
        private categoryReopsitory: CategoryRepository
    ) { }
    async getArticles(): Promise<Article[]> {
        return this.articleRepository.getArticles();
    }

    async createAricle(articleDto: ArticleDto): Promise<Article> {
        const category = await Category.findOne(articleDto.categoryId);

        if (!category) {
            throw new NotFoundException();
        }

        return await this.articleRepository.createAricle(articleDto, category);
    }

    async updateArticle(id: number, articleDto: ArticleDto): Promise<Article> {
        return await this.articleRepository.updateArticle(id, articleDto);
    }

    async deleteArticle(id: number): Promise<void> {
        const result = await this.articleRepository.delete({ id });

        if (result.affected === 0) {
            throw new NotFoundException();
        }
    }
}
