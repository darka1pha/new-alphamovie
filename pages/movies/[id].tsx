import Axios from '@apis/axios'
import { useGetMovieDetails, useGetSimilarMovies } from '@apis/hooks/movies'
import { useGetSimilarTv } from '@apis/hooks/tvshows'
import { MovieDetails } from '@apis/interfaces'
import { MOVIE_DETAILS, TRENDINGS } from '@apis/urls'
import { Cover, Details, SimilarItems } from '@components'
import { AxiosError, AxiosResponse } from 'axios'
import CoverSkeleton from 'components/Cover/Skeleton'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
	id: string
}

interface MovieResults {
	results: Array<MovieDetails>
}

const getMovies = async (): Promise<AxiosResponse<MovieResults>> =>
	await Axios.get(TRENDINGS({ media_type: 'movie' }))

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as IParams
	try {
		await Axios.get(MOVIE_DETAILS(id))
	} catch (error) {
		const err = error as AxiosError
		if (err.response?.status === 404)
			return {
				notFound: true,
			}
		else {
			return {
				redirect: {
					statusCode: 308,
					destination: '/500',
				},
			}
		}
	}
	return {
		props: {},
	}
}

export async function getStaticPaths() {
	const {
		data: { results: movies },
	} = await getMovies()
	return {
		paths: [
			...movies.map(({ id }) => ({
				params: {
					id: id.toString(),
				},
			})),
		],
		fallback: 'blocking',
	}
}

const SingleMovie = () => {
	const router = useRouter()
	const { data, isLoading } = useGetMovieDetails({ id: router.query.id })
	const { data: similars, isLoading: similarsLoading } = useGetSimilarMovies(
		router.query.id
	)
	return (
		<div>
			<Head>
				<title>{data ? data.title : 'Movies'}</title>
				<meta
					name='description'
					content={
						data
							? data.overview
							: 'آلفا مووی, مشاهده امتیاز و جزئیات فیلم ها و سریالها'
					}
				/>
				<meta
					property='og:url'
					content={`https://alphamovies.ir/movies/${data?.id}`}
				/>
				<meta
					name='keywords'
					content='alpha, alphamovies, alphamovie, alpha movies, movies, series, tv shows, shows, الفا موی, آلفا مووی, فیلم, دانلود فیلم, دانلود سریال, نقد و بررسی فیلم, نقد و بررسی فیلم و سریال'
				/>
				<meta property='og:type' content='website' />
			</Head>
			{isLoading || !data ? (
				<CoverSkeleton />
			) : (
				<>
					<Cover coverImage={data.backdrop_path} title={data.title} />
					<Details
						name={data.title}
						tagline={data.tagline ? data.tagline : data.title}
						overview={data.overview}
						rate={data.vote_average}
						releaseDate={data.release_date}
						status={data.status}
						budget={data.budget}
						runTime={data.runtime}
						posterImage={data.poster_path}
						genres={data.genres}
					/>
					<SimilarItems type='movie' data={similars} loading={similarsLoading} />
				</>
			)}
		</div>
	)
}

export default SingleMovie
