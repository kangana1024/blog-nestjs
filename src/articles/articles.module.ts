import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleRepository } from './article.repository';
import { CategoryRepository } from '../categories/categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleRepository,CategoryRepository])],
  controllers: [ArticlesController],
  providers: [ArticlesService]
})
export class ArticlesModule { }
