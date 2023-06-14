import prisma from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: IAuthRequest) {
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        });

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.SECRET_KEY,
            {
                subject: user.id,
                expiresIn: "30d"
            }
        );

        return {
            id: user.id,
            name: user.name,
            token
        };
    }
}

export { AuthUserService };