import { EntityRepository, Repository } from "typeorm";
import {Category} from "./category.entity";
import {CategoryDto} from "./dto/category.dto"

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    async getCategories() {

    }

    async createCategory() {

    }

    async updateCategory() {
        
    }
}