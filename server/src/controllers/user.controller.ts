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

export { createUser };
