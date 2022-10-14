import Axios from '@apis/axios'
import { useGetMovieDetails } from '@apis/hooks/movies'
import { MovieDetails } from '@apis/interfaces'
import { MOVIE_DETAILS, TRENDINGS } from '@apis/urls'
import { Cover, Details } from '@components'
import { AxiosResponse } from 'axios'
import CoverSkeleton from 'components/Cover/Skeleton'
import { GetStaticProps } from 'next'
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
	let data = null
	try {
		data = await Axios.get(MOVIE_DETAILS(id))
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
	return (
		<div>
			{isLoading || !data ? (
				<CoverSkeleton />
			) : (
				<>
					<Cover coverImage={data.backdrop_path} title={data.title} />
					<Details
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
				</>
			)}
		</div>
	)
}

export default SingleMovie
