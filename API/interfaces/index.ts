export interface ListResults {
	adult: boolean
	backdrop_path: string | null
	first_air_date: string
	media_type: 'tv' | 'movie' | 'person'
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
	media_type: 'all' | 'movie' | 'tv' | 'person'
	pageParam?: number
}

export interface MovieDetails {
	id: number
	adult: boolean
	backdrop_path: string | null
	budget: number
	genres: Array<{
		name: string
	}>
	original_title: string
	poster_path: string | null
	vote_average: number
	video: boolean
	title: string
	release_date: string
	runtime: number
	tagline: string | null
	overview: string
	status: string
}

export interface TvDetails {
	id: number
	backdrop_path: string | null
	episode_run_time: Array<number>
	first_air_date: string
	last_air_date: string
	number_of_episodes: number
	number_of_seasons: number
	genres: Array<{
		name: string
	}>
	original_name: string
	poster_path: string | null
	vote_average: number
	video: boolean
	tagline: string | null
	overview: string
	status: string
}
