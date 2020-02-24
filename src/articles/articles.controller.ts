import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete, UseGuards } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from './dto/article.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/users/get-user.decorator';
import { Article } from './article.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Article")
@Controller('articles')
export class ArticlesController {
    constructor(private articleService: ArticlesService) { }

    @Get()
    getArticle(): Promise<Article[]> {
        return this.articleService.getArticles();
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    createAricle(@Body() articleDto: ArticleDto, @GetUser() user): Promise<Article> {
        console.log(user)
        return this.articleService.createAricle(articleDto, user);
    }

    @Patch('/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    updateArticle(
        @Param('id', ParseIntPipe) id: number,
        @Body() articleDto: ArticleDto,
        @GetUser() user
    ): Promise<Article> {
        return this.articleService.updateArticle(id, articleDto, user);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    deleteArticle(@Param('id', ParseIntPipe) id: number, @GetUser() user): Promise<void> {
        return this.articleService.deleteArticle(id, user);
    }

    // @Post("/test")
    // @UseGuards(AuthGuard('jwt'))
    // test(@Req() req) {
    //     console.log(req);
    // }
}
