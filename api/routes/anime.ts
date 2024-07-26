import express, { Request, Response } from "express"
import { join } from "path";
import zoro from "../client/Zoro";
import AnimeType from "../types/anime.type";
import { title } from "process";
import WatchType from "../types/watch.type";

const router = express.Router();

router.get("/:name", async (req : Request, res: Response) => {
    const response = await zoro.fetchAnimeInfo(req.params.name);

    const {data:mal} = await fetch(`https://api.jikan.moe/v4/anime/${response.malID}/full`).then((res) => res.json());

    let desc = response.description;
    desc = desc?.replace(/\n/g, "");
    desc = desc?.replace("[Written by MAL Rewrite]", "")

    const data:AnimeType = {
        id: response.id,
        title: response.title,
        titleJapanese: response.japaneseTitle,
        image: response.image,
        description: desc,
        type: response.type,
        episodeCount: response.episodes?.length,

        source: mal.source,
        status: mal.status,
        score: mal.score,
        duration: mal.duration,
        season: mal.season,
        year: mal.year,
        aired: mal.aired.string,

        recomendations: [],
        relatedAnime: [],
        episodes: []
    }

    data.recomendations = response.recommendations?.map((anime) => {
        return {
            id: anime.id,
            title: anime.title,
            titleJapanese: anime.japaneseTitle,
            image: anime.image,
            episodes: anime.sub,
            type: anime.type
        }
    });

    data.relatedAnime = response.relatedAnime.map((anime: any) => {
        return {
            id: anime.id,
            title: anime.title,
            titleJapanese: anime.japaneseTitle,
            image: anime.image,
            episodes: anime.sub,
            type: anime.type
        }
    });

    data.episodes = response.episodes?.map((episode) => {
        return{
            id: episode.id,
            number: episode.number,
            title: episode.title,
            isFiller: episode.isFiller
        }
    })


    res.json(data);
});

router.get("/episode/:episode", async (req: Request, res: Response) => {
    const response = await zoro.fetchEpisodeSources(req.params.episode);

    const data : WatchType = {
        episodeSource: response.sources[0].url,
        subTitles: []
    }

    data.subTitles = response.subtitles?.map((vtt) => {
        return{
            source: vtt.url,
            language: vtt.lang
        }
    });

    res.json(data);
});

export default router;