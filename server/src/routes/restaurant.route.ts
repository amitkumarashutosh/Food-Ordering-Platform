import express from "express";
import {
  createRestaurant,
  getRestaurant,
  updateRestaurant,
} from "../controllers/restaurant.controller";
import { upload } from "../utils/multer";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateRestaurantRequest } from "../middlewares/validation";

const router = express.Router();

router
  .route("/")
  .post(
    upload.single("imageFile"),
    validateRestaurantRequest,
    jwtCheck,
    jwtParse,
    createRestaurant
  )
  .get(jwtCheck, jwtParse, getRestaurant)
  .put(
    upload.single("imageFile"),
    validateRestaurantRequest,
    jwtCheck,
    jwtParse,
    updateRestaurant
  );

export default router;
