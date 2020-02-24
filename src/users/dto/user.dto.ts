import { IsString, MinLength, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto {

    @ApiProperty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string;

    @ApiProperty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    password: string;
}