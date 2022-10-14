import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className='flex px-16 sm:px-28 justify-between align-middle h-[80px] w-full bg-[#12182980]'>
			<Link href='/'>
				<a aria-label='home-page' className='flex'>
					<div className='flex align-middle cursor-pointer'>
						<Image
							src='/assets/logo.svg'
							alt='logo'
							height={36}
							width={36}
						/>
					</div>
				</a>
			</Link>
			<div className='flex align-middle'>
				<Link href='/tvshows'>
					<a aria-label='tv-shows' className='flex'>
						<button className='mx-4'>
							<p className='font-popins text-center text-[#A8AEBF]'>Tv Shows</p>
						</button>
					</a>
				</Link>
				<Link href='/movies'>
					<a aria-label='movies' className='flex'>
						<button className='mx-4'>
							<p className='font-popins text-center text-[#A8AEBF]'>Movies</p>
						</button>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Navbar
