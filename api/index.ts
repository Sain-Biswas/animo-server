import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv"
import zoro from "./client/Zoro";
import home from "./routes/home";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/home", home);

app.get('/top-airing/:page', async (req: Request, res: Response) => {
  const response = await zoro.fetchTopAiring(Number.parseInt(req.params.page));
  res.json(response)
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});