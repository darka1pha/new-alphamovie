import Axios from '@apis/axios'
import { IPaginatedData, ListResults, MovieDetails } from '@apis/interfaces'
import { MOVIE_DETAILS, MOVIE_SEARCH } from '@apis/urls'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const useGetMovieDetails = ({
	id,
}: {
	id: string | string[] | undefined
}) =>
	useQuery([`movie-${id}`], async (): Promise<MovieDetails> => {
		const { data } = await Axios.get(MOVIE_DETAILS(id))
		return data
	})

export const useGetMovieSearch = ({ query }: { query: string }) =>
	useInfiniteQuery(
		['movie-search', query],
		async ({ pageParam = 1 }): Promise<IPaginatedData<ListResults>> => {
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
