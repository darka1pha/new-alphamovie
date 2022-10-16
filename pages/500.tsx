import Head from 'next/head'
import Image from 'next/image'

const ServerError = () => {
	return (
		<div className='flex items-center justify-center flex-col'>
			<Head>
				<title>Server Error</title>
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
			<h1 className='text-primary-200 text-5xl font-popins'>Server Error</h1>
			<Image src='/assets/server_error.svg' height={400} width={400} />
		</div>
	)
}

export default ServerError
