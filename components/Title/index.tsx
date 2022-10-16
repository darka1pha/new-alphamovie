import React, { useRef, useState } from 'react'

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
	const inputRef = useRef<null | HTMLInputElement>(null)

	const [isFocused, setIsFocused] = useState(false)

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
			<div
				onClick={() => {
					inputRef.current?.focus()
					setIsFocused(true)
				}}
				style={isFocused ? { borderColor: '#483bc3' } : undefined}
				className='max-w-[344px] group h-[70px] w-full relative mt-4 rounded-lg border-[#323b54] border-solid hover:border-primary-600 focus:border-primary-600 border-2 transition ease-in-out duration-300'>
				<p
					style={
						isFocused
							? {
									fontSize: '12px',
									top: '15px',
									color: '#483bc3',
									fontWeight: 'bold',
							  }
							: search
							? { fontSize: '12px', top: '15px', fontWeight: 'bold' }
							: undefined
					}
					className='text-[#323b54] group-hover:text-primary-600 absolute group-hover:text-pr left-12 my-auto top-[50%] translate-y-[-50%] flex items-center transition-all ease-in-out duration-300'>
					Search Movie,TV Shows and ....
				</p>
				<input
					ref={inputRef}
					onBlur={() => setIsFocused(false)}
					onChange={onSearchChanged}
					value={search}
					type='text'
					className='w-full py-[12px] bg-[transparent] pr-[16px] pl-[56px] absolute bottom-0 focus:outline-none caret-primary-600 text-primary-300 '
				/>
				<div className='absolute top-0 bottom-0 my-auto left-4 flex items-center'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							style={
								isFocused
									? {
											stroke: '#483bc3',
									  }
									: undefined
							}
							d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
							stroke='#475069'
							className='group-hover:stroke-primary-600 transition-all ease-in-out duration-300'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M22 22L20 20'
							style={
								isFocused
									? {
											stroke: '#483bc3',
									  }
									: undefined
							}
							stroke='#475069'
							className='group-hover:stroke-primary-600 transition-all ease-in-out duration-300'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				{/* <img
					alt='search-icon'
					className='absolute top-0 bottom-0 my-auto left-4'
					src='/icons/Search.svg'
					style={{}}
					height={24}
					width={24}
				/> */}
				{searching && (
					<div
						className='absolute top-0 bottom-0 my-auto flex items-center right-2'
						aria-label='Loading...'
						role='status'>
						<svg
							width='38'
							height='38'
							viewBox='0 0 38 38'
							xmlns='http://www.w3.org/2000/svg'>
							<defs>
								<linearGradient
									x1='8.042%'
									y1='0%'
									x2='65.682%'
									y2='23.865%'
									id='a'>
									<stop stopColor='#483bc3' stopOpacity='0' offset='0%' />
									<stop
										stopColor='#483bc3'
										stopOpacity='.631'
										offset='63.146%'
									/>
									<stop stopColor='#483bc3' offset='100%' />
								</linearGradient>
							</defs>
							<g fill='none' fill-rule='evenodd'>
								<g transform='translate(1 1)'>
									<path
										d='M36 18c0-9.94-8.06-18-18-18'
										id='Oval-2'
										stroke='url(#a)'
										stroke-width='2'>
										<animateTransform
											attributeName='transform'
											type='rotate'
											from='0 18 18'
											to='360 18 18'
											dur='0.9s'
											repeatCount='indefinite'
										/>
									</path>
									<circle fill='#483bc3' cx='36' cy='18' r='1'>
										<animateTransform
											attributeName='transform'
											type='rotate'
											from='0 18 18'
											to='360 18 18'
											dur='0.9s'
											repeatCount='indefinite'
										/>
									</circle>
								</g>
							</g>
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
