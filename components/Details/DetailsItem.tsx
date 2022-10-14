import React from 'react'

interface Props {
	full?: boolean
	name: string
	value: string | number | undefined
}
const DetailsItem: React.FC<Props> = ({ full, name, value }) => {
	return (
		<div
			className={`mt-6 flex-grow flex-shrink  ${
				!full ? 'lg:basis-[50%] basis-[100%]' : 'basis-[100%]'
			}`}>
			<p className='text-[#767E94] font-popins text-base'>{name}</p>
			<p className='text-[#C3C8D4] font-popins text-xl mt-2'>{value}</p>
		</div>
	)
}

export default DetailsItem
