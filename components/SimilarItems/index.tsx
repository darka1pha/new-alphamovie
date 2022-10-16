import { Swiper, SwiperSlide } from 'swiper/react'
import React from 'react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import Card from 'components/Card'
import { POSTER_URL } from '@apis/urls'

import { Navigation } from 'swiper'
import { IPaginatedData, ListResults } from '@apis/interfaces'
import Skeleton from 'components/Card/Skeleton'

interface Props {
	data: IPaginatedData<ListResults> | undefined
	type: 'tv' | 'movie'
	loading: boolean
}

const SimilarItems: React.FC<Props> = ({ data, type, loading }) => {
	return (
		<div className='flex flex-col mb-10'>
			<div className='mb-2'>
				<h3 className='text-primary-50 font-popins font-bold text-3xl  sm:text-5xl'>
					Similar {type === 'tv' ? 'Tv Shows' : 'Movies'}
				</h3>
			</div>
			<div>
				<Swiper
					className='mySwiper'
					modules={[Navigation]}
					navigation={true}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10,
						},
						600: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1100: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
						1280: {
							slidesPerView: 4,
							spaceBetween: 10,
						},
					}}>
					{loading || !data
						? Array.from(Array(10).keys()).map((i) => (
								<SwiperSlide key={i}>
									<div className='flex justify-center'>
										<Skeleton />
									</div>
								</SwiperSlide>
						  ))
						: data?.results.map(
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
										<SwiperSlide key={key}>
											<div className='flex justify-center'>
												<Card
													name={name ?? original_title}
													cover={POSTER_URL({ quality: 'w300' }) + poster_path}
													rate={vote_average}
													id={id}
													mediaType={type}
													adult={adult}
												/>
											</div>
										</SwiperSlide>
									)
						  )}
				</Swiper>
			</div>
		</div>
	)
}

export default SimilarItems
