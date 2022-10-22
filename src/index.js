import express, { application } from "express";
import cors from "cors"; //5k (gzipped:2.1k)
import { CategoryRouter } from "./components";
import { ProductRouter } from "./components";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/category", CategoryRouter);
app.use("/api/product", ProductRouter);

const PORT = 3000;

app.listen(PORT, () =>
console.log(`
    Server is running! ${PORT}`) 
    );