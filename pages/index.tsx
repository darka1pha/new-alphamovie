import { CardsContainer, Menu, Title } from '@components'

const Home = () => {
	return (
		<div className='flex flex-col flex-wrap'>
			<Title
				homeStyle
				title='AlphaMovie'
				subtitle='List of Movies and TV Shows, Explore and Pick One to Watch.'
			/>
			<Menu />
			<CardsContainer />
		</div>
	)
}

export default Home
