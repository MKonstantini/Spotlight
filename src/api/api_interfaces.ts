export interface Movie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface Show {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    name:string,
    original_country: string[],
    original_language: string,
    origianl_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number
}