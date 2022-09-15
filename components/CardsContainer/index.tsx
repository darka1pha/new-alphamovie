import Card from 'components/Card'
import React from 'react'

interface Props {
	data?: []
}

const CardsContainer: React.FC<Props> = ({ data }) => {
	return (
		<div className='w-full flex flex-wrap mt-12'>
			<Card name='Friends' cover='/assets/temp/friends.png' />
			<Card name='Two and Half Man' cover='/assets/temp/two.png' />
			<Card name='Loki' cover='/assets/temp/luki.png' />
			<Card name='Friends' cover='/assets/temp/friends.png' />
			<Card name='Two and Half Man' cover='/assets/temp/two.png' />
			<Card name='Loki' cover='/assets/temp/luki.png' />
		</div>
	)
}

export default CardsContainer
