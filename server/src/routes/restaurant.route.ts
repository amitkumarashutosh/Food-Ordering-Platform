import express from "express";
import {
  createRestaurant,
  getRestaurant,
} from "../controllers/restaurant.controller";
import { upload } from "../utils/multer";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateRestaurantRequest } from "../middlewares/validation";

const router = express.Router();

router
  .route("/")
  .post(
    upload.single("imageFile"),
    jwtCheck,
    jwtParse,
    validateRestaurantRequest,
    createRestaurant
  )
  .get(jwtCheck, jwtParse, getRestaurant);

export default router;
