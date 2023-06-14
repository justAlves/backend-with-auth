import { Router } from "express";
import { CreateUserController } from "./Controllers/User/CreateUserController";

const router = Router();

router.post("/register", new CreateUserController().handle);

export { router };