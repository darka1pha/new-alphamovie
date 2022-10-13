export interface ListResults {
	adult: boolean
	backdrop_path: string
	first_air_date: string
	media_type: 'tv' | 'movie'
	name: string
	overview: string
	poster_path: string
	vote_average: number
	genre_ids: Array<number>
	original_title: string
	id: number
}

export interface IPaginatedData<T> {
	page: number
	results: Array<T>
	total_pages: number
}

export interface TrendingsParams {
	media_type: 'all' | 'movie' | 'tv'
	pageParam?: number
}
