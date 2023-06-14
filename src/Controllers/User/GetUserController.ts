import { Request, Response } from "express";
import { GetUserService } from "../../Services/User/GetUserService";

class GetUserController {
    async handle(req: Request, res: Response) {
        const id = req.user_id;

        const getUserService = new GetUserService();

        const user = await getUserService.execute(id);

        return res.json(user);
    }
}

export { GetUserController };