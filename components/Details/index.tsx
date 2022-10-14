import {
	IMAGES_BASE_URL,
	ORIGINAL_IMAGES_BASE_URL,
	POSTER_URL,
} from '@apis/urls'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import DetailsItem from './DetailsItem'

interface Props {
	tagline: string
	overview: string
	rate: number
	status: string
	releaseDate: string
	runTime: number
	budget?: number
	lastAirDate?: string
	episodesNumber?: number
	seasonsNumber?: number
	posterImage: string | null
	name: string
	genres: Array<{
		name: string
	}>
}

const Details: React.FC<Props> = ({
	tagline,
	overview,
	rate,
	status,
	releaseDate,
	runTime,
	budget,
	lastAirDate,
	seasonsNumber,
	episodesNumber,
	posterImage,
	genres,
	name,
}) => {
	const router = useRouter()
	const isMovie = router.pathname.includes('movie')
	return (
		<div className='flex flex-col md:flex-row w-full my-24'>
			<div className='flex-1 rounded-xl mx-auto overflow-hidden self-baseline w-72 md:max-w-sm'>
				<Image
					src={POSTER_URL({ quality: 'w500' }) + posterImage}
					layout='responsive'
					width={411}
					height={617}
					className='object-cover h-full w-full'
					alt={name}
				/>
			</div>
			<div className='flex flex-col flex-1 mt-12  md:pl-20'>
				<h2 className='font-popins text-2xl text-[#EBEEF5] font-bold'>
					{tagline}
				</h2>

				<p className='font-popins text-xl text-[#8E95A9] mt-6'>{overview}</p>
				<div className='flex max-w-[80px] justify-center align-middle bg-[#00000065] rounded-md backdrop-blur-lg p-2 mt-6'>
					<img alt='rate-icon' height={16} width={16} src='/icons/Star.svg' />
					<p className='font-popins text-warning-500 ml-2'>{rate.toFixed(1)}</p>
				</div>
				<div className='flex flex-wrap'>
					<DetailsItem name='Type' value={isMovie ? 'Movie' : 'Tv Show'} />
					<DetailsItem name='Status' value={status} />
					<DetailsItem
						name={isMovie ? 'Release Date' : 'First Air Date'}
						value={releaseDate}
					/>
					{isMovie && (
						<DetailsItem name='Budget' value={`$${budget?.toLocaleString()}`} />
					)}
					{!isMovie && (
						<>
							<DetailsItem name='Last Air Date' value={lastAirDate} />
							<DetailsItem name='No. of Seasons' value={seasonsNumber} />
							<DetailsItem name='No. of Episodes' value={episodesNumber} />
						</>
					)}
					<DetailsItem
						name={isMovie ? 'Run Time' : 'Episode run Time'}
						value={`${runTime} min`}
						full
					/>
					<DetailsItem
						name='Genres'
						value={genres.map(({ name }) => name).join(', ')}
						full
					/>
				</div>
			</div>
		</div>
	)
}

export default Details
