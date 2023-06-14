import prisma from "../../prisma";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
    async execute({name, email, password}: IUserRequest){
        const userAlreadyExists = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const hashPassword = await hash(password, 8);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashPassword
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return { user };
    }
}

export { CreateUserService };