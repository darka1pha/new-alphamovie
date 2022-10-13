import { CardsContainer, Menu, Title } from '@components'
import { useGetTrendings } from 'API/hooks/homePage'
import Head from 'next/head'

const Tvshows = () => {
	const { data, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage } =
		useGetTrendings({ media_type: 'tv' })
	return (
		<div className='flex flex-col flex-wrap'>
			<Head>
				<title>Alpha Movies | آلفا موویز</title>
				<meta
					name='description'
					content='آلفا مووی, مشاهده امتیاز و جزئیات فیلم ها و سریالها'
				/>
				<meta property='og:url' content='https://alphamovies.ir/tvshows' />
				<meta
					name='keywords'
					content='alpha, alphamovies, alphamovie, alpha movies, movies, series, tv shows, shows, الفا موی, آلفا مووی, فیلم, دانلود فیلم, دانلود سریال, نقد و بررسی فیلم, نقد و بررسی فیلم و سریال'
				/>
				<meta property='og:type' content='website' />
			</Head>
			<Title title='TV Shows' />
			<Menu />
			<CardsContainer
				fetchNextPage={fetchNextPage}
				fetchingNextPage={isFetchingNextPage}
				hasNextPage={hasNextPage}
				data={data}
				loading={isLoading}
			/>
		</div>
	)
}

export default Tvshows
