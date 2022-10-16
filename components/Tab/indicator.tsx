const Indicator = ({ left, width }: { left: any; width: any }) => {
	return (
		<div
			style={{
				left,
				width,
			}}
			className={`absolute bg-primary-500 p-2 w-10 h-[60%] rounded-md transition-all duration-300`}
		/>
	)
}

export default Indicator
