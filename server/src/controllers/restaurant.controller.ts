import { Request, Response } from "express";
import { Restaurant } from "../models/restaurant.model";
import { uploadImage } from "../utils/cloudinary";
import mongoose from "mongoose";

const createRestaurant = async (req: Request, res: Response) => {
  try {
    const existingResturant = await Restaurant.findOne({ user: req.userId });

    if (existingResturant) {
      return res.status(409).json({ message: "User restaurant already exist" });
    }

    const uploadResponse = await uploadImage(req.file as Express.Multer.File);

    const restaurant = new Restaurant(req.body);
    restaurant.imageUrl = uploadResponse.url;
    restaurant.user = new mongoose.Types.ObjectId(req.userId);

    await restaurant.save();

    res.status(201).json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.status(200).json(restaurant);
  } catch (error) {
    console.log("error ", error);
    res.status(500).json({ message: "Error fetching restaurant" });
  }
};

const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.findOne({ user: req.userId });

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const {
      restaurantName,
      city,
      country,
      deliveryPrice,
      estimatedDeliveryTime,
      cuisines,
      menuItems,
    } = req.body;

    restaurant.restaurantName = restaurantName;
    restaurant.city = city;
    restaurant.country = country;
    restaurant.deliveryPrice = deliveryPrice;
    restaurant.estimatedDeliveryTime = estimatedDeliveryTime;
    restaurant.cuisines = cuisines;
    restaurant.menuItems = menuItems;

    if (req.file) {
      const uploadResponse = await uploadImage(req.file as Express.Multer.File);
      restaurant.imageUrl = uploadResponse.url;
    }

    await restaurant.save();
    res.status(200).json(restaurant);
  } catch (error) {
    console.log("error ", error);
    res.status(500).json({ message: "Error while updating restaurant" });
  }
};

export { createRestaurant, getRestaurant, updateRestaurant };
