import { CardsContainer, Menu, Title } from '@components'

const Tvshows = () => {
	return (
		<div className='flex flex-col flex-wrap'>
			<Title
				title='TV Shows'
			/>
			<Menu />
			<CardsContainer />
		</div>
	)
}

export default Tvshows
