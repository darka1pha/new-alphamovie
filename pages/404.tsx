import Head from 'next/head'
import Image from 'next/image'

const NotFound = () => {
	return (
		<div className='flex items-center justify-center'>
			<Head>
				<title>Page not Found</title>
				<meta
					name='description'
					content='آلفا مووی, مشاهده امتیاز و جزئیات فیلم ها و سریالها'
				/>
				<meta property='og:url' content='https://alphamovies.ir' />
				<meta
					name='keywords'
					content='alpha, alphamovies, alphamovie, alpha movies, movies, series, tv shows, shows, الفا موی, آلفا مووی, فیلم, دانلود فیلم, دانلود سریال, نقد و بررسی فیلم, نقد و بررسی فیلم و سریال'
				/>
				<meta property='og:type' content='website' />
			</Head>
			<Image src='/assets/404.svg' height={400} width={400} />
		</div>
	)
}

export default NotFound
