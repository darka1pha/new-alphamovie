import Axios from 'API/axios'
import { IPaginatedData, ListResults, TrendingsParams } from 'API/interfaces'
import { MULTI_SEARCH, TRENDINGS } from 'API/urls'
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

export const useGetMultiSearch = ({ query }: { query: string }) =>
	useInfiniteQuery(
		['search', query],
		async ({ pageParam = 1 }): Promise<IPaginatedData<ListResults>> => {
			const { data } = await Axios.get(MULTI_SEARCH(query, pageParam))
			return data
		},
		{
			enabled: !!query,
			getNextPageParam: (lastPage, pages) => {
				return lastPage.page + 1
			},
		}
	)
