import Image from 'next/image'
import React from 'react'

interface Props {
	title: string
	subtitle?: string
	homeStyle?: boolean
}

const Title: React.FC<Props> = ({ title, homeStyle, subtitle }) => {
	return (
		<div>
			<p
				className={`${
					homeStyle
						? 'text-[48px] sm:text-[64px] text-[#EBEEF5] font-semibold'
						: 'text-[14px] sm:text-[16px] text-[#8E95A9] font-normal'
				} font-popins`}>
				{homeStyle ? title : 'AlphaMovie'}
			</p>
			<p
				className={`${
					!homeStyle
						? 'text-[48px] sm:text-[64px] text-[#EBEEF5] font-semibold'
						: 'text-[14px] sm:text-[16px] text-[#8E95A9] font-normal'
				} font-popins`}>
				{homeStyle ? subtitle : title}
			</p>
			<div className='max-w-[344px] w-full relative mt-4'>
				<input
					type='text'
					placeholder='Search Movie,TV Shows and ....'
					className='w-full py-[12px] pr-[16px] pl-[56px] rounded-lg bg-[#00000020] border-[#323b54] border-solid border-[1px] placeholder-[#323b54] focus:outline-none caret-primary-200 text-primary-300 focus:border-primary-300 transition ease-in-out'
				/>
				<img
					className='absolute top-0 bottom-0 my-auto left-4'
					src='/icons/Search.svg'
					height={24}
					width={24}
				/>
			</div>
		</div>
	)
}

export default Title
