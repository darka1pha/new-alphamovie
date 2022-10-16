import { useRouter } from 'next/router'
import Indicator from './indicator'
import MenuButton from './MenuButton'

const Menu = ({
	activeTab,
	onChange,
}: {
	activeTab: 'all' | 'movie' | 'tv'
	onChange: (value: 'all' | 'tv' | 'movie') => void
}) => {
	return (
		<div className='bg-[#00000020] relative h-[56px] w-full  max-w-[360px] p-2 mt-12 rounded-md flex justify-between items-center'>
			<Indicator active={activeTab} />
			<MenuButton onClick={() => onChange('all')} name='All' />
			<MenuButton onClick={() => onChange('movie')} name='Movies' />
			<MenuButton onClick={() => onChange('tv')} name='TV Shows' />
		</div>
	)
}

export default Menu
