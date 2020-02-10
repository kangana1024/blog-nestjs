import { EntityRepository, Repository } from "typeorm";
import { Category } from "./category.entity";
import { CategoryDto } from "./dto/category.dto";
import { InternalServerErrorException, NotFoundException } from "@nestjs/common";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    async getCategories(): Promise<Category[]> {
        const category = await Category.find({});

        return category;
    }

    async createCategory(categoryDto: CategoryDto): Promise<Category> {
        const { name } = categoryDto;

        const category = new Category();
        try {
            category.name = name;
            await category.save();
        } catch (error) {
            throw new InternalServerErrorException();

        }

        return category;
    }

    async updateCategory(id: number, categoryDto: CategoryDto): Promise<Category> {
        const category = await Category.findOne(id);

        if (!category) {
            throw new NotFoundException;
        }

        const { name } = categoryDto;
        category.name = name;

        try {
            await category.save()
        } catch (error) {
            throw new InternalServerErrorException;

        }

        return category;
    }
}