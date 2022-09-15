import getAverageColor from '@helpers/getAverageColor'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
	cover: string
	name: string
}

const Card: React.FC<Props> = ({ cover, name }) => {
	const imageRef = useRef(null)
	const [baseColor, setBaseColor] = useState<null | string>(null)
	useEffect(() => {
		if (imageRef && imageRef.current) {
			const { r, g, b } = getAverageColor(imageRef.current)
			setBaseColor(`rgba(${r},${g},${b},0.5)`)
		}
	}, [imageRef])

	// if (baseColor === null)
	// 	return (
	// 		<div
	// 			className={`flex flex-col min-w-[300px] min-h-[480px] p-[8px]  backdrop-blur-sm rounded-md cursor-pointer group m-2 flex-shrink flex-grow basis-[20%]`}
	// 		/>
	// 	)

	return (
		<Link href={{ pathname: '/[name]', query: { name: 'moviename' } }}>
				<a
					style={{ backgroundColor: baseColor ? baseColor : 'none' }}
					className={`flex flex-col ${
						baseColor === null ? 'bg-primary-300/10 animate-pulse' : ''
					}  min-w-[300px] h-[480px] p-[8px] backdrop-blur-sm rounded-md cursor-pointer group m-2 flex-shrink flex-grow basis-[20%]`}>
					<div
						className={`w-full h-[400px] rounded-md overflow-hidden relative ${
							baseColor === null ? 'hidden' : 'flex'
						}`}>
						<img
							ref={imageRef}
							className='object-cover w-full h-full group-hover:scale-105 transition ease-in-out'
							src={cover}
						/>
						<div
							className={`${
								baseColor === null ? 'hidden' : 'flex'
							} flex align-middle bg-[#00000065] rounded-md backdrop-blur-lg p-2 absolute z-10 top-2 left-2`}>
							<img height={16} width={16} src='/icons/Star.svg' />
							<p className='font-popins text-warning-500 ml-2'>6.5</p>
						</div>
					</div>
					<div
						className={`pl-2 my-auto ${
							baseColor === null ? 'hidden' : 'flex'
						}`}>
						<p className='font-popins text-primary-100'>{name}</p>
					</div>
				</a>
		</Link>
	)
}

export default Card
