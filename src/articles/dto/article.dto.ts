import { IsNotEmpty } from "class-validator";

export class ArticleDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    body: string;

    @IsNotEmpty()
    categoryId: number;
}