import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";

import zoro from "./client/Zoro";
import home from "./routes/home";
import anime from "./routes/anime"

import AnimePageType from "./types/animepage.type";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/home", home);
app.use("/anime", anime);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Animo - Server API",
    isWorking: true,
    description: "Use with Caution"
  })
});

app.get('/top-airing/:page', async (req: Request, res: Response) => {
  const response = await zoro.fetchTopAiring(Number.parseInt(req.params.page));

  const data : AnimePageType = {
    currentPage: response.currentPage,
    hasNextPage: response.hasNextPage,
    totalPages: response.totalPages,
    results: []
  }

  data.results = response.results.map((anime) => {
    return {
      id: anime.id,
      title: anime.title,
      titleJapanese: anime.japaneseTitle,
      banner: anime.image,
      duration: anime.duration,
      episodes: anime.sub,
      type: anime.type
  }
  })

  res.json(data);
});

app.get('/recently-updated/:page', async (req: Request, res: Response) => {
  const response = await zoro.fetchRecentlyUpdated(Number.parseInt(req.params.page));

  const data : AnimePageType = {
    currentPage: response.currentPage,
    hasNextPage: response.hasNextPage,
    totalPages: response.totalPages,
    results: []
  }

  data.results = response.results.map((anime) => {
    return {
      id: anime.id,
      title: anime.title,
      titleJapanese: anime.japaneseTitle,
      banner: anime.image,
      duration: anime.duration,
      episodes: anime.sub,
      type: anime.type
  }
  })

  res.json(data);
});

app.get('/most-favourite/:page', async (req: Request, res: Response) => {
  const response = await zoro.fetchMostFavorite(Number.parseInt(req.params.page));

  const data : AnimePageType = {
    currentPage: response.currentPage,
    hasNextPage: response.hasNextPage,
    totalPages: response.totalPages,
    results: []
  }

  data.results = response.results.map((anime) => {
    return {
      id: anime.id,
      title: anime.title,
      titleJapanese: anime.japaneseTitle,
      banner: anime.image,
      duration: anime.duration,
      episodes: anime.sub,
      type: anime.type
  }
  })

  res.json(data);
});

app.get('/most-popular/:page', async (req: Request, res: Response) => {
  const response = await zoro.fetchMostPopular(Number.parseInt(req.params.page));

  const data : AnimePageType = {
    currentPage: response.currentPage,
    hasNextPage: response.hasNextPage,
    totalPages: response.totalPages,
    results: []
  }

  data.results = response.results.map((anime) => {
    return {
      id: anime.id,
      title: anime.title,
      titleJapanese: anime.japaneseTitle,
      banner: anime.image,
      duration: anime.duration,
      episodes: anime.sub,
      type: anime.type
  }
  })

  res.json(data);
});

app.get('/latest-completed/:page', async (req: Request, res: Response) => {
  const response = await zoro.fetchLatestCompleted(Number.parseInt(req.params.page));

  const data : AnimePageType = {
    currentPage: response.currentPage,
    hasNextPage: response.hasNextPage,
    totalPages: response.totalPages,
    results: []
  }

  data.results = response.results.map((anime) => {
    return {
      id: anime.id,
      title: anime.title,
      titleJapanese: anime.japaneseTitle,
      banner: anime.image,
      duration: anime.duration,
      episodes: anime.sub,
      type: anime.type
  }
  })

  res.json(data);
});

app.get('/recently-added/:page', async (req: Request, res: Response) => {
  const response = await zoro.fetchRecentlyAdded(Number.parseInt(req.params.page));

  const data : AnimePageType = {
    currentPage: response.currentPage,
    hasNextPage: response.hasNextPage,
    totalPages: response.totalPages,
    results: []
  }

  data.results = response.results.map((anime) => {
    return {
      id: anime.id,
      title: anime.title,
      titleJapanese: anime.japaneseTitle,
      banner: anime.image,
      duration: anime.duration,
      episodes: anime.sub,
      type: anime.type
  }
  })

  res.json(data);
});



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});