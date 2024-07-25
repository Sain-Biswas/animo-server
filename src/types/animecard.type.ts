import { ITitle, MediaFormat } from "@consumet/extensions";


export default interface AnimeCardType {
    id: string;
    title: ITitle | string;
    titleJapanese: string;
    banner: string | undefined;
    duration: string;
    episodes: number;
    type: MediaFormat | undefined;
};