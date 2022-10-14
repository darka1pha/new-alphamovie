import { IMAGES_BASE_URL, ORIGINAL_IMAGES_BASE_URL } from '@apis/urls'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Cover = ({
	coverImage,
	title,
}: {
	coverImage: string | null
	title: string
}) => {
	const router = useRouter()
	return (
		<div className='w-full relative'>
			<div className="relative max-h-[500px] m-auto overflow-hidden rounded-2xl after:content-[''] after:block after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-r from-primary-700/40 to-secondary-700/40">
				<Image
					src={ORIGINAL_IMAGES_BASE_URL + coverImage}
					layout='responsive'
					width={958}
					height={538}
					alt={title}
				/>
			</div>
			<div className='rounded-2xl p-8 md:p-10 bg-[#20283E80] backdrop-blur-lg max-w-[90%] md:max-w-[560px] w-full absolute bottom-[-60px] mx-auto md:mx-0 md:left-10 block left-0 right-0'>
				<p className='text-primary-200 font-popins text-xs'>
					{router.pathname.includes('movies')
						? 'AlphaMovie / Movies'
						: 'AlphaMovie / TV Shows'}
				</p>
				<h1 className='text-[#EBEEF5] font-popins text-xl  md:text-3xl font-semibold mt-2'>
					{title}
				</h1>
			</div>
		</div>
	)
}

export default Cover
