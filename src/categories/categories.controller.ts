import { Controller, Get, Post, Body, Patch, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto/category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Categories")
@Controller('categories')
export class CategoriesController {
    constructor(
        private categorieService: CategoriesService
    ) { }
    @Get()
    getCategories() {
        return this.categorieService.getCategories()
    }

    @Post()
    createCategory(@Body() categoryDto: CategoryDto) {
        return this.categorieService.createCategory(categoryDto);
    }

    @Patch('/:id')
    updateCategory(@Param('id', ParseIntPipe) id: number, @Body() categoryDto: CategoryDto) {
        return this.categorieService.updateCategory(id, categoryDto)
    }

    @Delete('/:id')
    deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.categorieService.deleteCategory(id);
    }
}
