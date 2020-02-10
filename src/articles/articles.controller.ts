import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private articleService: ArticlesService) { }

    @Get()
    getArticle() {
        return this.articleService.getArticles();
    }

    @Post()
    createAricle(@Body() articleDto: ArticleDto) {
        return this.articleService.createAricle(articleDto);
    }

    @Patch('/:id')
    updateArticle(@Param('id', ParseIntPipe) id: number,@Body() articleDto: ArticleDto) {
        return this.articleService.updateArticle(id, articleDto);
    }

    @Delete('/:id')
    deleteArticle(@Param('id', ParseIntPipe) id: number) {
        return this.articleService.deleteArticle(id);
    }

}
