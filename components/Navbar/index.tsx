import Link from 'next/link'

const Navbar = () => {
	return (
		<div className='flex px-28 justify-between align-middle h-[80px] w-full bg-[#12182980]'>
			<Link href='/'>
				<a className='flex'>
					<div className='flex align-middle cursor-pointer'>
						<img src='/assets/logo.svg' height='36px' width='36px' />
					</div>
				</a>
			</Link>
			<div className='flex align-middle'>
				<Link href='/tvshows'>
					<a className='flex'>
						<button className='mx-4'>
							<p className='font-popins text-center text-[#A8AEBF]'>Tv Shows</p>
						</button>
					</a>
				</Link>
				<Link href='/movies'>
					<a className='flex'>
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