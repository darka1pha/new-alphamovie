import Axios from '@apis/axios'
import { useGetSimilarTv, useGetTvDetails } from '@apis/hooks/tvshows'
import { TvDetails } from '@apis/interfaces'
import { TRENDINGS, TV_DETAILS } from '@apis/urls'
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

interface TvResults {
	results: Array<TvDetails>
}

const getTvs = async (): Promise<AxiosResponse<TvResults>> =>
	await Axios.get(TRENDINGS({ media_type: 'tv' }))

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as IParams
	try {
		await Axios.get(TV_DETAILS(id))
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
	} = await getTvs()
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

const Single = () => {
	const router = useRouter()
	const { data, isLoading } = useGetTvDetails({ id: router.query.id })
	const { data: similars, isLoading: similarsLoading } = useGetSimilarTv(
		router.query.id
	)
	return (
		<div>
			<Head>
				<title>{data ? data.original_name : 'Tv Shows'}</title>
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
					content={`https://alphamovies.ir/tvshows/${data?.id}`}
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
					<Cover coverImage={data.backdrop_path} title={data.original_name} />
					<Details
						name={data.original_name}
						genres={data.genres}
						tagline={data.tagline ? data.tagline : data.original_name}
						overview={data.overview}
						rate={data.vote_average}
						releaseDate={data.first_air_date}
						status={data.status}
						runTime={data.episode_run_time[0]}
						posterImage={data.poster_path}
						seasonsNumber={data.number_of_seasons}
						episodesNumber={data.number_of_episodes}
						lastAirDate={data.last_air_date}
					/>
					<SimilarItems type='tv' data={similars} loading={similarsLoading} />
				</>
			)}
		</div>
	)
}

export default Single
