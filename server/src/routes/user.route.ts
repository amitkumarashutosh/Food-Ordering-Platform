import express from "express";
import { createUser, updateUser } from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateUserRequest } from "../middlewares/validation";

const router = express.Router();

router.route("/").post(jwtCheck, createUser);
router.route("/").put(jwtCheck, jwtParse, validateUserRequest, updateUser);

export default router;
