import { ITitle, MediaFormat } from "@consumet/extensions";
import AnimeReferenceCardType from "./animereferencecard.type";
import AnimeEpisodeType from "./animeepisode.type";

export default interface AnimeType {
    id: string;
    title: string | ITitle;
    titleJapanese: string;
    image: string | undefined;
    description: string | undefined;
    type: MediaFormat | undefined;
    episodeCount: number | undefined;

    source: string | undefined;
    status: string | undefined;
    score: number | undefined;
    duration: string | undefined;
    season: string | undefined;
    year: number | undefined;
    aired: string | undefined;

    recomendations?: AnimeReferenceCardType[];
    relatedAnime?: AnimeReferenceCardType[];
    episodes?: AnimeEpisodeType[];
}