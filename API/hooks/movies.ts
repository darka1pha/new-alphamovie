import Axios from '@apis/axios'
import { IPaginatedData, ListResults, MovieDetails } from '@apis/interfaces'
import {
	MOVIE_DETAILS,
	MOVIE_SEARCH,
	MOVIE_SIMILARS,
	POPULAR_MOVIES,
} from '@apis/urls'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const useGetMovieDetails = ({
	id,
}: {
	id: string | string[] | undefined
}) =>
	useQuery<MovieDetails>([`movie-${id}`], async () => {
		const { data } = await Axios.get(MOVIE_DETAILS(id))
		return data
	})

export const useGetMovies = () =>
	useInfiniteQuery<IPaginatedData<ListResults>>(
		['movies'],
		async ({ pageParam = 1 }) => {
			const { data } = await Axios.get(POPULAR_MOVIES({ pageParam }))
			return data
		},
		{
			getNextPageParam: (lastPage, pages) => {
				return lastPage.page + 1
			},
		}
	)

export const useGetMovieSearch = ({ query }: { query: string }) =>
	useInfiniteQuery<IPaginatedData<ListResults>>(
		['movie-search', query],
		async ({ pageParam = 1 }) => {
			const { data } = await Axios.get(MOVIE_SEARCH(query, pageParam))
			return data
		},
		{
			enabled: !!query,
			getNextPageParam: (lastPage, pages) => {
				return lastPage.page + 1
			},
		}
	)

export const useGetSimilarMovies = (id: string | string[] | undefined) =>
	useQuery<IPaginatedData<ListResults>>([`similar-${id}`], async () => {
		const { data } = await Axios.get(MOVIE_SIMILARS(id))
		return data
	})
