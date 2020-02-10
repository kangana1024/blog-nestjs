import { EntityRepository, Repository } from "typeorm";
import { User } from "./user.entity";
import { UserDto } from "./dto/user.dto";
import * as bcrypt from "bcrypt";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(userDto: UserDto): Promise<void> {
        const { username, password } = userDto;

        const user = new User();
        user.username = username;
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(password, user.salt);

        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("Username already exists")
            } else {
                throw new InternalServerErrorException()
            }
        }
    }
    async signIn(userDto: UserDto): Promise<string> {
        const { username, password } = userDto;
        const user = await this.findOne({ username });

        if (user) {
            const hash = await bcrypt.hash(password, user.salt);

            if (hash === user.password) {
                return user.username
            }
        }
        return null
    }
}