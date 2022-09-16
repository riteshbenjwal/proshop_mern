import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDb from "./config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
connectDb();

app.use(express.static(path.join(__dirname, ".", "public")));

//Product routes
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/*", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, ".", "public", "index.html"));
});

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);
