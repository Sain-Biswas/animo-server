import { ITitle, MediaFormat } from "@consumet/extensions";


export default interface AnimeReferenceCardType {
    id: string;
    title: string | ITitle;
    titleJapanese: string;
    image: string | undefined;
    episodes: number | undefined;
    type: MediaFormat | undefined;
}