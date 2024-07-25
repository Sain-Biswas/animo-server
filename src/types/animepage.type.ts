import AnimeCardType from "./animecard.type";


export default interface AnimePageType {
    currentPage: number;
    hasNextPage: boolean;
    totalPages: number;
    results: AnimeCardType[]
}