import React from 'react'

const TabButton: React.FC<{ name: string; onClick: any }> = ({
	name,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={`min-w-[85px] z-[1] p-2 bg-none font-popins text-primary-50 font-semibold text-xs rounded-md transition ease-in-out hover:scale-105`}>
			{name}
		</button>
	)
}

export default TabButton
