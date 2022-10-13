const Skeleton = () => {
	return (
		<div
			className={`flex flex-col bg-primary-300/10 animate-pulse
			min-w-[300px] max-w-[300px] h-[480px] p-[8px] backdrop-blur-sm rounded-md cursor-pointer group m-4 flex-shrink flex-grow basis-[20%]`}></div>
	)
}

export default Skeleton
