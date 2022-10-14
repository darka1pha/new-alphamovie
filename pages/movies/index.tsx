import { useGetMovieSearch } from '@apis/hooks/movies'
import { CardsContainer, Menu, Title } from '@components'
import useDebounce from '@hooks/useDebounce'
import { useGetTrendings } from 'API/hooks/homePage'
import Head from 'next/head'
import { useState } from 'react'

const Movies = () => {
	const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
		useGetTrendings({ media_type: 'movie' })

	const [search, setSearch] = useState('')
	const debouncedSearchValue = useDebounce(search, 1000)

	const {
		data: searchData,
		isLoading: searchLoading,
		fetchNextPage: fetchNextSearch,
		isFetchingNextPage: fetchingSearch,
		hasNextPage: hasNextSearch,
	} = useGetMovieSearch({ query: debouncedSearchValue })

	return (
		<div className='flex flex-col flex-wrap'>
			<Head>
				<title>Alpha Movies | آلفا موویز</title>
				<meta
					name='description'
					content='آلفا مووی, مشاهده امتیاز و جزئیات فیلم ها و سریالها'
				/>
				<meta property='og:url' content='https://alphamovies.ir/movies' />
				<meta
					name='keywords'
					content='alpha, alphamovies, alphamovie, alpha movies, movies, series, tv shows, shows, الفا موی, آلفا مووی, فیلم, دانلود فیلم, دانلود سریال, نقد و بررسی فیلم, نقد و بررسی فیلم و سریال'
				/>
				<meta property='og:type' content='website' />
			</Head>
			<Title
				searching={searchLoading && !!debouncedSearchValue}
				onClear={() => {
					setSearch('')
				}}
				onSearchChanged={(e) => {
					setSearch(e.target.value)
				}}
				search={search}
				title='Movies'
			/>
			<Menu />
			<CardsContainer
				fetchNextPage={searchData ? fetchNextSearch : fetchNextPage}
				fetchingNextPage={searchData ? fetchingSearch : isFetchingNextPage}
				hasNextPage={searchData ? hasNextSearch : hasNextPage}
				data={searchData ?? data}
				loading={searchData ? searchLoading : isLoading}
			/>
		</div>
	)
}

export default Movies
