import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./db/index";
import userRouter from "./routes/user.route";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening at port ${port}`);
    });
  })
  .catch(() => {
    console.log("Failed to connect to app");
  });
