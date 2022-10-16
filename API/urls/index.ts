import { TrendingsParams } from 'API/interfaces'

interface PosterUrl {
	quality: 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original'
}

interface BackdropUrl {
	quality: 'w300' | 'w780' | 'w1280' | 'original'
}

export const BASE_URL = 'https://api.themoviedb.org/3'

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/'

export const POSTER_URL = ({ quality }: PosterUrl) =>
	`${IMAGES_BASE_URL}${quality}`

export const BACKDROP_URL = ({ quality }: BackdropUrl) =>
	`${IMAGES_BASE_URL}${quality}`

const API_KEY = '917e390fb30e6e519915e41532377965'

const urlGenerator = (url: string, page?: number | undefined) =>
	page ? `${url}?api_key=${API_KEY}&page=${page}` : `${url}?api_key=${API_KEY}`

export const TRENDINGS = ({ media_type = 'all', pageParam }: TrendingsParams) =>
	`${urlGenerator(`/trending/${media_type}/day`, pageParam)}`

export const POPULAR_MOVIES = ({ pageParam }: { pageParam: number }) =>
	`${urlGenerator(`/movie/popular`, pageParam)}`

export const POPULAR_TVS = ({ pageParam }: { pageParam: number }) =>
	`${urlGenerator(`/tv/popular`, pageParam)}`

export const MOVIE_DETAILS = (id: string | string[] | undefined) =>
	urlGenerator(`/movie/${id}`)

export const TV_DETAILS = (id: string | string[] | undefined) =>
	urlGenerator(`/tv/${id}`)

export const MULTI_SEARCH = (query: string, pageParam: number) =>
	`${urlGenerator('/search/multi', pageParam)}&query=${query}`

export const MOVIE_SEARCH = (query: string, pageParam: number) =>
	`${urlGenerator('/search/movie', pageParam)}&query=${query}`

export const TV_SEARCH = (query: string, pageParam: number) =>
	`${urlGenerator('/search/tv', pageParam)}&query=${query}`

export const TV_SIMILARS = (id: string | string[] | undefined) =>
	urlGenerator(`/tv/${id}/similar`)

	export const MOVIE_SIMILARS = (id: string | string[] | undefined) =>
	urlGenerator(`/movie/${id}/similar`)
