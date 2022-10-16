import useReachBottom from '@hooks/useReachBottom'
import { IPaginatedData, ListResults } from 'API/interfaces'
import { POSTER_URL } from 'API/urls'
import Card from 'components/Card'
import Skeleton from 'components/Card/Skeleton'
import Loading from 'components/Loading'
import React, { useRef } from 'react'
import { InfiniteData } from '@tanstack/react-query'

interface Props {
	data: InfiniteData<IPaginatedData<ListResults>> | undefined
	loading: boolean
	fetchNextPage: () => void
	hasNextPage: boolean | undefined
	fetchingNextPage: boolean
	activeTab?: 'all' | 'tv' | 'movie'
}

const CardsContainer: React.FC<Props> = ({
	data,
	loading,
	fetchNextPage,
	hasNextPage,
	fetchingNextPage,
	activeTab,
}) => {
	const containerRef = useRef(null)
	const reachBottom = useReachBottom({
		el: containerRef,
		onReach: fetchNextPage,
		onReachCondition: hasNextPage,
		refreshDependecies: [data],
	})
	return (
		<div ref={containerRef} className='flex justify-center'>
			<div className='w-full flex flex-wrap mt-12 justify-center'>
				{loading || !data ? (
					Array.from(Array(10).keys()).map((i) => <Skeleton key={i} />)
				) : data?.pages[0].results.length > 0 ? (
					data?.pages.map((page, key) => (
						<React.Fragment key={key}>
							{page.results.map(
								(
									{
										poster_path,
										original_title,
										name,
										vote_average,
										media_type,
										id,
										adult,
									},
									key
								) =>
									media_type !== 'person' && (
										<Card
											key={key}
											name={name ?? original_title}
											cover={POSTER_URL({ quality: 'w300' }) + poster_path}
											rate={vote_average}
											id={id}
											mediaType={media_type ?? activeTab}
											adult={adult}
										/>
									)
							)}
						</React.Fragment>
					))
				) : (
					<div>
						<p className='text-primary-400 font-popins font-semibold text-xl'>
							There is no result for your search terms &#128546;
						</p>
					</div>
				)}
				{fetchingNextPage && <Loading />}
			</div>
		</div>
	)
}

export default CardsContainer
