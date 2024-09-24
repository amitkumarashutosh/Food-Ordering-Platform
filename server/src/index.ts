import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./db/index";
import userRouter from "./routes/user.route";
import restaurantRoute from "./routes/restaurant.route";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.status(200).json({ message: "health OK!" });
});

app.use("/api/user", userRouter);
app.use("/api/restaurant", restaurantRoute);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening at port ${port}`);
    });
  })
  .catch(() => {
    console.log("Failed to connect to app");
  });
