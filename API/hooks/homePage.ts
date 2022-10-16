import Axios from 'API/axios'
import { IPaginatedData, ListResults, TrendingsParams } from 'API/interfaces'
import { MOVIE_SEARCH, MULTI_SEARCH, TRENDINGS, TV_SEARCH } from 'API/urls'
import { useInfiniteQuery } from '@tanstack/react-query'

export const useGetTrendings = ({ media_type }: TrendingsParams) =>
	useInfiniteQuery(
		[media_type],
		async ({ pageParam = 1 }): Promise<IPaginatedData<ListResults>> => {
			const { data } = await Axios.get(TRENDINGS({ media_type, pageParam }))
			return data
		},
		{
			getNextPageParam: (lastPage, pages) => {
				return lastPage.page + 1
			},
		}
	)

export const useGetMultiSearch = ({
	query,
	type,
}: {
	query: string
	type: 'all' | 'movie' | 'tv'
}) =>
	useInfiniteQuery(
		['search', query, type],
		async ({ pageParam = 1 }): Promise<IPaginatedData<ListResults>> => {
			const { data } = await Axios.get(
				type === 'all'
					? MULTI_SEARCH(query, pageParam)
					: type === 'movie'
					? MOVIE_SEARCH(query, pageParam)
					: TV_SEARCH(query, pageParam)
			)
			return data
		},
		{
			enabled: !!query,
			getNextPageParam: (lastPage, pages) => {
				return lastPage.page + 1
			},
		}
	)
