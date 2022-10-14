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
			<a aria-label='menu-links'>
				<button
					className={`min-w-[85px] p-2 ${
						active ? 'bg-primary-500' : 'bg-none'
					} font-popins text-primary-50 font-semibold text-xs rounded-md hover:bg-primary-600 transition ease-in-out hover:scale-105`}>
					{name}
				</button>
			</a>
		</Link>
	)
}

export default MenuButton
