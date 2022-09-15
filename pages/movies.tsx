import { CardsContainer, Menu, Title } from '@components'

const Movies = () => {
	return (
		<div className='flex flex-col flex-wrap'>
			<Title title='Movies' />
			<Menu />
			<CardsContainer />
		</div>
	)
}

export default Movies
