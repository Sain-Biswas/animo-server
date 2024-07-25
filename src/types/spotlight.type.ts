import { ITitle, MediaFormat } from "@consumet/extensions";

export default interface SpotLightType {
    id: string;
    title: string | ITitle;
    titleJapanese: string;
    banner: string;
    rank: number;
    type: MediaFormat | undefined;
    duration: string;
    releaseDate: string | undefined;
    quality: string;
    episodes: number;
    description: string;
}