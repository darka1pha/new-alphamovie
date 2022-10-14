import Axios from '@apis/axios'
import { useGetTvDetails } from '@apis/hooks/tvshows'
import { TvDetails } from '@apis/interfaces'
import { TRENDINGS, TV_DETAILS } from '@apis/urls'
import { Cover, Details } from '@components'
import { AxiosResponse } from 'axios'
import CoverSkeleton from 'components/Cover/Skeleton'
import { GetStaticProps } from 'next'
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
	let data = null
	try {
		data = await Axios.get(TV_DETAILS(id))
	} catch (error) {
		return {
			notFound: true,
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
	return (
		<div>
			{isLoading || !data ? (
				<CoverSkeleton />
			) : (
				<>
					<Cover coverImage={data.backdrop_path} title={data.original_name} />
					<Details
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
				</>
			)}
		</div>
	)
}

export default Single
