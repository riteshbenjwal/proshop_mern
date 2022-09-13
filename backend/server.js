import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDb from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
connectDb();

//Product routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
 
app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
