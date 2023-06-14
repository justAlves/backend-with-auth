import prisma from "../../prisma";

class GetUserService {
    async execute(id: string){

        const user = await prisma.user.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            }
        });

        return user;
    }
}

export { GetUserService };