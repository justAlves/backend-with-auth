import { Router } from "express";
import { CreateUserController } from "./Controllers/User/CreateUserController";
import { AuthUserController } from "./Controllers/User/AuthUserController";

const router = Router();

router.post("/register", new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);

export { router };