import React from 'react'
import { forwardRef } from 'react'

interface TabButtonProps {
	name: string
	onClick: any
}

const TabButton = forwardRef<HTMLButtonElement | null, TabButtonProps>(
	({ name, onClick }, ref) => {
		return (
			<button
				ref={ref}
				onClick={onClick}
				className={`min-w-[85px] z-[1] p-2 bg-none font-popins text-primary-50 font-semibold text-xs rounded-md transition ease-in-out hover:scale-105`}>
				{name}
			</button>
		)
	}
)

export default TabButton
