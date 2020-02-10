import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './categories.repository';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRopository: CategoryRepository
    ){}

    async getCategories() {

    }

    async createCategories() {

    }

    async updateCategories() {

    }

    async deleteCategories() {

    }
}
