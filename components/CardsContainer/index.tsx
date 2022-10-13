import useReachBottom from '@hooks/useReachBottom'
import { IPaginatedData, ListResults } from 'API/interfaces'
import { IMAGES_BASE_URL } from 'API/urls'
import Card from 'components/Card'
import Skeleton from 'components/Card/Skeleton'
import Loading from 'components/Loading'
import React, { forwardRef, useRef } from 'react'
import { InfiniteData } from '@tanstack/react-query'

interface Props {
	data: InfiniteData<IPaginatedData<ListResults>> | undefined
	loading: boolean
	fetchNextPage: () => void
	hasNextPage: boolean | undefined
	fetchingNextPage: boolean
}

const CardsContainer: React.FC<Props> = forwardRef(
	({ data, loading, fetchNextPage, hasNextPage, fetchingNextPage }) => {
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
					{loading
						? Array.from(Array(10).keys()).map((i) => <Skeleton key={i} />)
						: data?.pages.map((page, key) => (
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
											},
											key
										) => (
											<Card
												key={key}
												name={name ?? original_title}
												cover={IMAGES_BASE_URL + poster_path}
												rate={vote_average}
												id={id}
												mediaType={media_type.toUpperCase()}
											/>
										)
									)}
								</React.Fragment>
						  ))}
					{fetchingNextPage && <Loading />}
				</div>
			</div>
		)
	}
)
export default CardsContainer
