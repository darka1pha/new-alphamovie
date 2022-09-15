import DetailsItem from './DetailsItem'

const Details = () => {
	return (
		<div className='flex flex-col md:flex-row w-full my-24'>
			<div className='flex-1 rounded-xl overflow-hidden w-full max-w-[380px] max-h-[600px]  md:max-w-[420px] md:h-[600px]'>
				<img
					src='/assets/temp/lost.png'
					className='object-cover h-full w-full'
				/>
			</div>
			<div className='flex flex-col flex-1 mt-12  md:pl-20'>
				<p className='font-popins text-2xl text-[#EBEEF5] font-bold'>
					Have You Seen Our Robot?
				</p>
				<p className='font-popins text-xl text-[#8E95A9] mt-6'>
					The mission to save Scarecrow takes an unexpected turn, throwing the
					Resolute into chaos. Judy hatches a plan to get a ship to Alpha
					Centauri.
				</p>
				<div className='flex max-w-[80px] justify-center align-middle bg-[#00000065] rounded-md backdrop-blur-lg p-2 mt-6'>
					<img height={16} width={16} src='/icons/Star.svg' />
					<p className='font-popins text-warning-500 ml-2'>6.5</p>
				</div>
				<div className='flex flex-wrap'>
					<DetailsItem name='Type' value='Tv Show' />
					<DetailsItem name='Status' value='Returning Series' />
					<DetailsItem name='Firs Air Date' value='2018-04-13' />
					<DetailsItem name='Last Air Date' value='2019-04-24' />
					<DetailsItem name='No. of Seasons' value='2' />
					<DetailsItem name='No. of Episodes' value='24' />
					<DetailsItem name='Episode run Time' value='56 min' full />
					<DetailsItem
						name='Genres'
						value='Action & Adventure, Sci-Fi & Fantasy, Drama'
						full
					/>
				</div>
			</div>
		</div>
	)
}

export default Details
