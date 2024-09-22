import express from "express";
import {
  createUser,
  getCurrentUser,
  updateUser,
} from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateUserRequest } from "../middlewares/validation";

const router = express.Router();

router
  .route("/")
  .post(jwtCheck, createUser)
  .put(jwtCheck, jwtParse, validateUserRequest, updateUser)
  .get(jwtCheck, jwtParse, getCurrentUser);

export default router;
