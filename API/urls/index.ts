import { TrendingsParams } from 'API/interfaces'

export const BASE_URL = 'https://api.themoviedb.org/3'
export const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const API_KEY = '917e390fb30e6e519915e41532377965'

const urlGenerator = (url: string, page: number | undefined) =>
	`${url}?api_key=${API_KEY}&page=${page}`

export const TRENDINGS = ({ media_type = 'all', pageParam }: TrendingsParams) =>
	urlGenerator(`/trending/${media_type}/day`, pageParam)
