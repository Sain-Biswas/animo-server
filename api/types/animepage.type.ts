import AnimeCardType from "./animecard.type";


export default interface AnimePageType {
    currentPage: number | undefined;
    hasNextPage: boolean | undefined;
    totalPages: number | undefined;
    results: AnimeCardType[]
}