import Axios from '@apis/axios'
import { IPaginatedData, ListResults, TvDetails } from '@apis/interfaces'
import { POPULAR_TVS, TV_DETAILS, TV_SEARCH } from '@apis/urls'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export const useGetTvDetails = ({
	id,
}: {
	id: string | string[] | undefined
}) =>
	useQuery([`tv-${id}`], async (): Promise<TvDetails> => {
		const { data } = await Axios.get(TV_DETAILS(id))
		return data
	})

export const useGetTvs = () =>
	useInfiniteQuery(
		['tvs'],
		async ({ pageParam = 1 }): Promise<IPaginatedData<ListResults>> => {
			const { data } = await Axios.get(POPULAR_TVS({ pageParam }))
			return data
		},
		{
			getNextPageParam: (lastPage, pages) => {
				return lastPage.page + 1
			},
		}
	)

export const useGetTvSearch = ({ query }: { query: string }) =>
	useInfiniteQuery(
		['tvsearch', query],
		async ({ pageParam = 1 }): Promise<IPaginatedData<ListResults>> => {
			const { data } = await Axios.get(TV_SEARCH(query, pageParam))
			return data
		},
		{
			enabled: !!query,
			getNextPageParam: (lastPage, pages) => {
				return lastPage.page + 1
			},
		}
	)
