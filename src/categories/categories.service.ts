import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './categories.repository';
import { Category } from './category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRopository: CategoryRepository
    ) { }

    async getCategories(): Promise<Category[]> {
        return await this.categoryRopository.getCategories();
    }

    async createCategory(categoryDto: CategoryDto): Promise<Category> {
        return await this.categoryRopository.createCategory(categoryDto);
    }

    async updateCategory(id: number, categoryDto: CategoryDto): Promise<Category> {
        return await this.categoryRopository.updateCategory(id, categoryDto);
    }

    async deleteCategory(id: number): Promise<void>{
        const result = await this.categoryRopository.delete({id});

        if(result.affected === 0){
            throw new  NotFoundException();
        }
    }
}
