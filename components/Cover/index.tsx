const Cover = () => {
	return (
		<div className='h-[552px] w-full relative'>
			<div className="h-[480px] relative w-full overflow-hidden rounded-2xl after:content-[''] after:block after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-r from-primary-700/40 to-secondary-700/40">
				<img
					src='/assets/temp/Banner.png'
					className='h-full w-full object-cover'
				/>
			</div>
			<div className='rounded-2xl p-10 bg-[#20283E80] backdrop-blur-lg max-w-[90%] md:max-w-[560px] w-full absolute bottom-0 mx-auto md:mx-0 md:left-10 block left-0 right-0'>
				<p className='text-primary-200 font-popins text-xs'>
					AlphaMovie / TV Shows
				</p>
				<p className='text-[#EBEEF5] font-popins text-xl  md:text-3xl font-semibold mt-2'>
					Lost In Space
				</p>
			</div>
		</div>
	)
}

export default Cover
