import React from 'react'

interface Props {
	title: string
	subtitle?: string
	homeStyle?: boolean
	search: string
	onSearchChanged: React.ChangeEventHandler<HTMLInputElement>
	onClear: React.MouseEventHandler<HTMLButtonElement>
	searching: boolean
}

const Title: React.FC<Props> = ({
	title,
	homeStyle,
	subtitle,
	search,
	onSearchChanged,
	onClear,
	searching,
}) => {
	return (
		<div>
			{homeStyle ? (
				<>
					<h1
						className={
							'text-[48px] sm:text-[64px] text-[#EBEEF5] font-semibold font-popins'
						}>
						{title}
					</h1>
					<p className='text-[14px] sm:text-[16px] text-[#8E95A9] font-normal font-popins'>
						{subtitle}
					</p>
				</>
			) : (
				<>
					<p className='text-[14px] sm:text-[16px] text-[#8E95A9] font-normal font-popins'>
						AlphaMovie
					</p>
					<h1 className='text-[48px] sm:text-[64px] text-[#EBEEF5] font-semibold font-popins'>
						{title}
					</h1>
				</>
			)}
			<div className='max-w-[344px] w-full relative mt-4'>
				<input
					onChange={onSearchChanged}
					value={search}
					type='text'
					placeholder='Search Movie,TV Shows and ....'
					className='w-full py-[12px] pr-[16px] pl-[56px] rounded-lg bg-[#00000020] border-[#323b54] border-solid placeholder-[#323b54] focus:outline-none caret-primary-200 text-primary-300 focus:border-primary-600 border-2 transition ease-in-out'
				/>
				<img
					alt='search-icon'
					className='absolute top-0 bottom-0 my-auto left-4'
					src='/icons/Search.svg'
					height={24}
					width={24}
				/>
				{searching && (
					<div
						className='absolute top-0 bottom-0 my-auto flex items-center right-2'
						aria-label='Loading...'
						role='status'>
						<svg className='h-6 w-6 animate-spin' viewBox='3 3 18 18'>
							<path
								className=' fill-primary-500'
								d='M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z'></path>
							<path
								className='fill-primary-200'
								d='M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z'></path>
						</svg>
					</div>
				)}
				{!searching && search && (
					<div
						className='absolute top-0 bottom-0 my-auto flex items-center right-2'
						aria-label='Loading...'
						role='status'>
						<button
							onClick={onClear}
							type='button'
							className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
							<span className='sr-only'>Close menu</span>
							<svg
								className='h-6 w-6 stroke-primary-300'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Title
