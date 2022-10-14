import { TrendingsParams } from 'API/interfaces'

export const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500'
export const ORIGINAL_IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/original'

const API_KEY = '917e390fb30e6e519915e41532377965'

const urlGenerator = (url: string, page?: number | undefined) =>
	page ? `${url}?api_key=${API_KEY}&page=${page}` : `${url}?api_key=${API_KEY}`

export const TRENDINGS = ({ media_type = 'all', pageParam }: TrendingsParams) =>
	`${urlGenerator(`/trending/${media_type}/day`, pageParam)}&query=lord`

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
