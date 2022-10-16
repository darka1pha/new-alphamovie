const CoverSkeleton = () => {
	return (
		<div className='w-full relative animate-pulse'>
			<div className="relative h-[30vh] md:h-[60vh] lg:h-[88vh] m-auto overflow-hidden rounded-2xl after:content-[''] after:block after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-r from-primary-700/40 to-secondary-700/40"></div>
			<div className='rounded-2xl h-[100px] bg-[#20283E80] backdrop-blur-lg max-w-[90%] md:max-w-[560px] w-full absolute bottom-[-60px] mx-auto md:mx-0 md:left-10 block left-0 right-0'></div>
		</div>
	)
}

export default CoverSkeleton
