import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
	cover: string
	name: string
	rate: number
	id: number
	mediaType?: 'tv' | 'movie'
	adult?: boolean
}

const Card: React.FC<Props> = ({ cover, name, rate, id, mediaType, adult }) => {
	const router = useRouter()
	return (
		<Link
			href={{
				pathname: mediaType
					? mediaType === 'movie'
						? '/movies/[id]'
						: '/tvshows/[id]'
					: router.pathname.includes('movies')
					? '/movies/[id]'
					: '/tvshows/[id]',
				query: { id },
			}}>
			<a
				className={`flex flex-col bg-primary-800/40  w-[250px] h-[400px] p-[8px] rounded-md cursor-pointer group m-4`}>
				<div className={`w-full h-[330px] rounded-md overflow-hidden relative`}>
					<Image
						className='group-hover:scale-105 transition ease-in-out duration-500'
						height={450}
						width={300}
						src={cover}
						alt={name}
						layout='responsive'
					/>
					<div
						className={` flex items-center  bg-[#00000065] rounded-md backdrop-blur-lg p-2 absolute top-2 left-2`}>
						<Image
							alt='rate-star'
							height={16}
							width={16}
							src='/icons/Star.svg'
						/>
						<p className='font-popins text-warning-500 ml-2'>
							{rate.toFixed(1)}
						</p>
					</div>
					{mediaType && (
						<div
							className={` flex bg-[#00000065] rounded-md backdrop-blur-lg p-2 absolute top-2 left-20`}>
							<p className='font-popins text-warning-500'>
								{mediaType.toUpperCase()}
							</p>
						</div>
					)}
					{adult && (
						<div
							className={` flex bg-[#00000099] rounded-md backdrop-blur-lg p-2 absolute top-2 ${
								mediaType === 'movie' ? 'left-40' : 'left-32'
							}`}>
							<p className='font-popins text-[red]'>Adult</p>
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
