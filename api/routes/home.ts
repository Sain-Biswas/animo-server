import express, { Request, Response } from "express"
import zoro from "../client/Zoro";
import SpotLightType from "../types/spotlight.type";
import AnimeCardType from "../types/animecard.type";

const router = express.Router();

router.get('/spotlight', async (req : Request, res: Response) => {
    const response = await zoro.fetchSpotlight();
    const data: SpotLightType[] = response.results.map((anime) => {
      let desc: string = anime.description;
      desc = desc.replace(/\n/g, '');
      desc = desc.replace('[Written by MAL Rewrite]', '');

      return {
        id: anime.id,
        title: anime.title,
        titleJapanese: anime.japaneseTitle,
        banner: anime.banner,
        rank: anime.rank,
        type: anime.type,
        duration: anime.duration,
        releaseDate: anime.releaseDate,
        quality: anime.quality,
        episodes: anime.sub,
        description: desc
      }
    })
  res.json(data);
});

router.get("/top-airing", async (req: Request, res: Response)=>{
    const response = await zoro.fetchTopAiring();

    const data: AnimeCardType[] = response.results.slice(0,12).map((anime) => {
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

router.get("/recently-updated", async (req: Request, res: Response)=>{
    const response = await zoro.fetchRecentlyUpdated();

    const data: AnimeCardType[] = response.results.slice(0,12).map((anime) => {
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

router.get("/most-favorite", async (req: Request, res: Response)=>{
    const response = await zoro.fetchMostFavorite();

    const data: AnimeCardType[] = response.results.slice(0,12).map((anime) => {
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

router.get("/most-popular", async (req: Request, res: Response)=>{
    const response = await zoro.fetchMostPopular();

    const data: AnimeCardType[] = response.results.slice(0,12).map((anime) => {
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

router.get("/latest-completed", async (req: Request, res: Response)=>{
    const response = await zoro.fetchLatestCompleted();

    const data: AnimeCardType[] = response.results.slice(0,12).map((anime) => {
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

router.get("/recently-added", async (req: Request, res: Response)=>{
    const response = await zoro.fetchRecentlyAdded();

    const data: AnimeCardType[] = response.results.slice(0,12).map((anime) => {
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

export default router;