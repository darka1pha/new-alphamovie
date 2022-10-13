import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
	cover: string
	name: string
	rate: number
	id: number
	mediaType: string
}

const Card: React.FC<Props> = ({ cover, name, rate, id, mediaType }) => {
	const router = useRouter()
	return (
		<Link href={{ pathname: '/[name]', query: { name: 'moviename' } }}>
			<a
				className={`flex flex-col bg-primary-300/10 min-w-[300px] max-w-[300px] h-[480px] p-[8px] backdrop-blur-sm rounded-md cursor-pointer group m-4 flex-shrink flex-grow basis-[20%]`}>
				<div className={`w-full h-[400px] rounded-md overflow-hidden relative`}>
					<Image
						className='object-cover w-full h-full group-hover:scale-105 transition ease-in-out'
						height={410}
						width={290}
						src={cover}
					/>
					<div
						className={` flex align-middle bg-[#00000065] rounded-md backdrop-blur-lg p-2 absolute z-10 top-2 left-2`}>
						<img height={16} width={16} src='/icons/Star.svg' />
						<p className='font-popins text-warning-500 ml-2'>
							{rate.toFixed(1)}
						</p>
					</div>
					{router.pathname === '/' && (
						<div
							className={` flex bg-[#00000065] rounded-md backdrop-blur-lg p-2 absolute z-10 top-2 left-20`}>
							<p className='font-popins text-warning-500'>{mediaType}</p>
						</div>
					)}
				</div>
				<div className={`pl-2 my-auto flex`}>
					<p className='font-popins text-primary-100'>{name}</p>
				</div>
			</a>
		</Link>
	)
}

export default Card
