import { Request, Response } from "express";
import { User } from "../models/user.model";

const createUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;

    const isUserExist = await User.findOne({ auth0Id });
    if (isUserExist) {
      return res.status(200).json({ message: "User already exist" });
    }

    // const user = await User.create(req.body);
    // res.status(201).json(user);

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error) {
    res.status(500).json({ message: "Error while creating user" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, addressLine, country, city } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.addressLine = addressLine;
    user.city = city;
    user.country = country;

    await user.save();

    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error while updating user" });
  }
};

export { createUser, updateUser };
