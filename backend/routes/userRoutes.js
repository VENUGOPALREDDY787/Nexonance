import { Router } from "express";
import { register } from "../controllers/userController.js";

const router = Router();

router.route('/register').post(register);
export default router;