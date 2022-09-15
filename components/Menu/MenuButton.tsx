import Link from 'next/link'
import React from 'react'

const MenuButton: React.FC<{ name: string; active?: boolean }> = ({
	active,
	name,
}) => {
	return (
		<Link
			href={
				name.toLowerCase() === 'movies'
					? '/movies'
					: name.toLowerCase() === 'tv shows'
					? '/tvshows'
					: '/'
			}>
			<button
				className={`min-w-[85px] p-2 ${
					active ? 'bg-primary-400' : 'bg-none'
				} font-popins text-primary-50 font-semibold text-xs md:text-base rounded-md hover:bg-primary-500 transition ease-in-out hover:scale-105`}>
				{name}
			</button>
		</Link>
	)
}

export default MenuButton
