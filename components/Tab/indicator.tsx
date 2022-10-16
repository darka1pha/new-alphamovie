const Indicator = ({ active }: { active: 'all' | 'tv' | 'movie' }) => {
	const left = active === 'all' ? '10px' : active === 'movie' ? '128px' : '247px'
	return (
		<div
			style={{
				left,
			}}
			className={`absolute bg-primary-500 p-2 w-10 h-[60%] rounded-md min-w-[85px] transition-all duration-300`}
		/>
	)
}

export default Indicator
